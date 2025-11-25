-- Remove the dangerous public read policy
DROP POLICY IF EXISTS "Public read access for waitlist submissions" ON public.waitlist_submissions;

-- Create user roles enum and table for admin access
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin role (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.is_admin(check_user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = check_user_id
      AND role = 'admin'
  )
$$;

-- Create secure policies for waitlist_submissions (admin-only read access)
CREATE POLICY "Only admins can view waitlist submissions" 
ON public.waitlist_submissions 
FOR SELECT 
TO authenticated
USING (public.is_admin());

-- Allow admins to manage all waitlist data
CREATE POLICY "Admins can update waitlist submissions" 
ON public.waitlist_submissions 
FOR UPDATE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can delete waitlist submissions" 
ON public.waitlist_submissions 
FOR DELETE 
TO authenticated
USING (public.is_admin());

-- Policy for user_roles (users can only see their own roles)
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (user_id = auth.uid());

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (public.is_admin());

-- Update the edge functions to use service role key (they already do, so this is safe)
-- The insert policy remains unchanged as it allows public submissions
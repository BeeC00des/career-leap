-- Create mentor_applications table
CREATE TABLE public.mentor_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  linkedin_url TEXT,
  job_title TEXT NOT NULL,
  company TEXT,
  years_of_experience INTEGER NOT NULL,
  expertise_areas TEXT[] NOT NULL,
  why_mentor TEXT NOT NULL,
  availability TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.mentor_applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can submit mentor application"
ON public.mentor_applications
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Only admins can view mentor applications"
ON public.mentor_applications
FOR SELECT
USING (is_admin());

CREATE POLICY "Admins can update mentor applications"
ON public.mentor_applications
FOR UPDATE
USING (is_admin());

CREATE POLICY "Admins can delete mentor applications"
ON public.mentor_applications
FOR DELETE
USING (is_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_mentor_applications_updated_at
BEFORE UPDATE ON public.mentor_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
-- Create waitlist submissions table
CREATE TABLE public.waitlist_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    location TEXT,
    current_status TEXT,
    field_of_study TEXT,
    career_challenge TEXT,
    wants_strategy_call BOOLEAN DEFAULT false,
    submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist)
CREATE POLICY "Anyone can submit waitlist form" 
ON public.waitlist_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all submissions (you'll need auth for this)
CREATE POLICY "Public read access for waitlist submissions" 
ON public.waitlist_submissions 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_waitlist_submissions_updated_at
    BEFORE UPDATE ON public.waitlist_submissions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
-- Create enum types for form fields
CREATE TYPE public.career_status AS ENUM ('final-year-student', 'recent-graduate', 'career-changer', 'student', 'graduate', 'working', 'unemployed', 'other');
CREATE TYPE public.call_language AS ENUM ('english', 'german');
CREATE TYPE public.experience_level AS ENUM ('none', 'internships', 'part-time', 'full-time', 'freelance');

-- Create strategy_call_submissions table
CREATE TABLE public.strategy_call_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  current_status career_status NOT NULL,
  goal TEXT NOT NULL,
  language call_language NOT NULL,
  availability TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create career_assessment_submissions table
CREATE TABLE public.career_assessment_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  current_status career_status NOT NULL,
  field_of_study TEXT NOT NULL,
  career_goals TEXT NOT NULL,
  skills TEXT NOT NULL,
  challenges TEXT NOT NULL,
  experience experience_level NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.strategy_call_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_assessment_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for strategy call submissions
CREATE POLICY "Anyone can submit strategy call form" 
ON public.strategy_call_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only admins can view strategy call submissions" 
ON public.strategy_call_submissions 
FOR SELECT 
USING (is_admin());

CREATE POLICY "Admins can update strategy call submissions" 
ON public.strategy_call_submissions 
FOR UPDATE 
USING (is_admin());

CREATE POLICY "Admins can delete strategy call submissions" 
ON public.strategy_call_submissions 
FOR DELETE 
USING (is_admin());

-- Create policies for career assessment submissions
CREATE POLICY "Anyone can submit career assessment form" 
ON public.career_assessment_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only admins can view career assessment submissions" 
ON public.career_assessment_submissions 
FOR SELECT 
USING (is_admin());

CREATE POLICY "Admins can update career assessment submissions" 
ON public.career_assessment_submissions 
FOR UPDATE 
USING (is_admin());

CREATE POLICY "Admins can delete career assessment submissions" 
ON public.career_assessment_submissions 
FOR DELETE 
USING (is_admin());

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_strategy_call_submissions_updated_at
BEFORE UPDATE ON public.strategy_call_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_career_assessment_submissions_updated_at
BEFORE UPDATE ON public.career_assessment_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
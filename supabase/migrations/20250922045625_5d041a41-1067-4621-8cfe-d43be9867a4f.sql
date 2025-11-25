-- Add phone and university fields to waitlist_submissions table
ALTER TABLE public.waitlist_submissions 
ADD COLUMN phone TEXT,
ADD COLUMN university TEXT;

-- Add phone and university fields to strategy_call_submissions table  
ALTER TABLE public.strategy_call_submissions
ADD COLUMN phone TEXT,
ADD COLUMN university TEXT;

-- Add phone and university fields to career_assessment_submissions table
ALTER TABLE public.career_assessment_submissions
ADD COLUMN phone TEXT, 
ADD COLUMN university TEXT;
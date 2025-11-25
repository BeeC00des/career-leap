import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface MentorApplication {
  full_name: string;
  email: string;
  phone?: string;
  linkedin_url?: string;
  job_title: string;
  company?: string;
  years_of_experience: number;
  expertise_areas: string[];
  why_mentor: string;
  availability: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const application: MentorApplication = await req.json();
    
    console.log("Received mentor application:", {
      email: application.email,
      name: application.full_name,
    });

    // Validate required fields
    if (!application.full_name || !application.email || !application.job_title) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Insert into database
    const { data, error } = await supabase
      .from("mentor_applications")
      .insert({
        full_name: application.full_name,
        email: application.email,
        phone: application.phone,
        linkedin_url: application.linkedin_url,
        job_title: application.job_title,
        company: application.company,
        years_of_experience: application.years_of_experience,
        expertise_areas: application.expertise_areas,
        why_mentor: application.why_mentor,
        availability: application.availability,
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      throw error;
    }

    console.log("Mentor application saved successfully:", data.id);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Application submitted successfully",
        id: data.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-mentor-application function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

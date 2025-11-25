import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CareerAssessmentSubmission {
  fullName: string;
  email: string;
  currentStatus: string;
  fieldOfStudy: string;
  careerGoals: string;
  skills: string;
  challenges: string;
  experience: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { fullName, email, currentStatus, fieldOfStudy, careerGoals, skills, challenges, experience }: CareerAssessmentSubmission = await req.json();

    console.log('Received career assessment submission:', { fullName, email, currentStatus });

    // Validate required fields
    if (!fullName || !email || !currentStatus || !fieldOfStudy || !careerGoals || !skills || !challenges || !experience) {
      throw new Error('Missing required fields');
    }

    // Insert data into career_assessment_submissions table
    const { data, error: insertError } = await supabase
      .from('career_assessment_submissions')
      .insert([
        {
          full_name: fullName,
          email: email,
          current_status: currentStatus,
          field_of_study: fieldOfStudy,
          career_goals: careerGoals,
          skills: skills,
          challenges: challenges,
          experience: experience,
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw insertError;
    }

    console.log('Career assessment submission saved:', data.id);

    // Send confirmation email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'CareerLeap <noreply@careerleap.com>',
            to: [email],
            subject: 'Career Assessment Complete - Your Report Coming Soon!',
            html: `
              <h2>Career Assessment Complete!</h2>
              <p>Hi ${fullName},</p>
              <p>Thank you for completing your free career assessment with CareerLeap. We're analyzing your responses and will send you a personalized career report within 24 hours.</p>
              
              <h3>What to expect in your report:</h3>
              <ul>
                <li>🎯 Personalized career path recommendations</li>
                <li>📈 Skills gap analysis with improvement plan</li>
                <li>🌟 Market opportunities in your field</li>
                <li>📚 Curated resources for your career goals</li>
                <li>🗺️ Step-by-step action plan</li>
              </ul>
              
              <h3>Your assessment summary:</h3>
              <p><strong>Field of Study:</strong> ${fieldOfStudy}</p>
              <p><strong>Career Goals:</strong> ${careerGoals}</p>
              <p><strong>Key Skills:</strong> ${skills}</p>
              
              <p>While you wait, feel free to explore our resources or book a free strategy call for personalized guidance.</p>
              <p>Best regards,<br>The CareerLeap Team</p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Email sending failed:', await emailResponse.text());
        } else {
          console.log('Confirmation email sent successfully');
        }
      } catch (emailError) {
        console.error('Email error:', emailError);
        // Don't throw here - we still want to return success even if email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Career assessment submission received successfully',
        id: data.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Career assessment submission error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal server error' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
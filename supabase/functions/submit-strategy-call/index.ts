import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface StrategyCallSubmission {
  fullName: string;
  email: string;
  currentStatus: string;
  goal: string;
  language: string;
  availability: string;
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

    const { fullName, email, currentStatus, goal, language, availability }: StrategyCallSubmission = await req.json();

    console.log('Received strategy call submission:', { fullName, email, currentStatus });

    // Validate required fields
    if (!fullName || !email || !currentStatus || !goal || !language || !availability) {
      throw new Error('Missing required fields');
    }

    // Insert data into strategy_call_submissions table
    const { data, error: insertError } = await supabase
      .from('strategy_call_submissions')
      .insert([
        {
          full_name: fullName,
          email: email,
          current_status: currentStatus,
          goal: goal,
          language: language,
          availability: availability,
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw insertError;
    }

    console.log('Strategy call submission saved:', data.id);

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
            subject: 'Strategy Call Confirmed - CareerLeap',
            html: `
              <h2>Your Strategy Call is Confirmed!</h2>
              <p>Hi ${fullName},</p>
              <p>Thank you for booking a free strategy call with CareerLeap. We're excited to help you accelerate your career journey!</p>
              
              <h3>What happens next?</h3>
              <ul>
                <li>📅 You'll receive a calendar invite within 24 hours</li>
                <li>📋 We'll send you a prep checklist to maximize our session</li>
                <li>💡 Come prepared with your questions and career goals</li>
              </ul>
              
              <h3>Your submission details:</h3>
              <p><strong>Goal:</strong> ${goal}</p>
              <p><strong>Language:</strong> ${language}</p>
              <p><strong>Availability:</strong> ${availability}</p>
              
              <p>Looking forward to speaking with you soon!</p>
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
        message: 'Strategy call submission received successfully',
        id: data.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Strategy call submission error:', error);
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
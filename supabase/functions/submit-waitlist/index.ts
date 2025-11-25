import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WaitlistSubmission {
  fullName: string;
  email: string;
  location?: string;
  currentStatus?: string;
  fieldOfStudy?: string;
  careerChallenge?: string;
  wantsStrategyCall: boolean;
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

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    const submission: WaitlistSubmission = await req.json();
    console.log('Received waitlist submission:', submission);

    // Save to database
    const { data, error: dbError } = await supabase
      .from('waitlist_submissions')
      .insert({
        full_name: submission.fullName,
        email: submission.email,
        location: submission.location,
        current_status: submission.currentStatus,
        field_of_study: submission.fieldOfStudy,
        career_challenge: submission.careerChallenge,
        wants_strategy_call: submission.wantsStrategyCall,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log('Saved to database:', data);

    // Send confirmation email
    const emailResponse = await resend.emails.send({
      from: "Germany Career Leap <onboarding@resend.dev>",
      to: [submission.email],
      subject: "Welcome to Germany Career Leap! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #2563eb, #3b82f6); padding: 30px; border-radius: 10px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to Germany Career Leap!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your journey to a successful career in Germany starts here</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1f2937; margin-top: 0;">Thank you, ${submission.fullName}! 🎉</h2>
            
            <p style="color: #374151; line-height: 1.6;">
              We're thrilled to have you join our waitlist! Your application has been successfully received and you're now part of an exclusive group of ambitious professionals preparing for their German career journey.
            </p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1f2937; margin-top: 0;">What happens next?</h3>
              <ul style="color: #374151; line-height: 1.8; padding-left: 20px;">
                <li>🎯 <strong>Priority Access:</strong> You'll be among the first to know when we launch</li>
                <li>💰 <strong>Exclusive Discount:</strong> Special pricing for early supporters</li>
                <li>🎓 <strong>Career Resources:</strong> Free guides and tips via email</li>
                ${submission.wantsStrategyCall ? '<li>📞 <strong>Strategy Call:</strong> We\'ll contact you soon to schedule your free consultation</li>' : ''}
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <div style="background: linear-gradient(135deg, #2563eb, #3b82f6); color: white; padding: 15px; border-radius: 8px; display: inline-block;">
                <strong style="font-size: 18px;">🎁 You're in! Welcome to the community!</strong>
              </div>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px;">
              Keep an eye on your inbox for updates and exclusive content!<br>
              <em>Germany Career Leap Team</em>
            </p>
          </div>
        </div>
      `,
    });

    console.log('Email sent successfully:', emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Waitlist submission successful!',
      data: data 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in submit-waitlist function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
});
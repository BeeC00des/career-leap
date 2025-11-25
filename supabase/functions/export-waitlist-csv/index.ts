import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

    console.log('Fetching waitlist submissions for CSV export...');

    // Fetch all waitlist submissions
    const { data: submissions, error } = await supabase
      .from('waitlist_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log(`Found ${submissions?.length || 0} submissions`);

    if (!submissions || submissions.length === 0) {
      return new Response('No submissions found', {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
      });
    }

    // Create CSV content
    const csvHeaders = [
      'ID',
      'Full Name',
      'Email',
      'Location',
      'Current Status',
      'Field of Study',
      'Career Challenge',
      'Wants Strategy Call',
      'Submitted At',
      'Created At'
    ];

    const csvRows = submissions.map(submission => [
      submission.id,
      `"${submission.full_name || ''}"`,
      submission.email,
      `"${submission.location || ''}"`,
      `"${submission.current_status || ''}"`,
      `"${submission.field_of_study || ''}"`,
      `"${submission.career_challenge || ''}"`,
      submission.wants_strategy_call ? 'Yes' : 'No',
      submission.submitted_at,
      submission.created_at
    ]);

    const csvContent = [
      csvHeaders.join(','),
      ...csvRows.map(row => row.join(','))
    ].join('\n');

    console.log('CSV export successful');

    // Generate filename with current date
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    const filename = `waitlist-submissions-${dateStr}.csv`;

    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${filename}"`,
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in export-waitlist-csv function:', error);
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
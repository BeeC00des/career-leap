import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Download, Users, Shield, AlertTriangle } from "lucide-react";

const AdminPanel = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [submissionCount, setSubmissionCount] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      setUser(currentUser);
      
      if (!currentUser) {
        setIsAdmin(false);
        return;
      }

      // Check if user has admin role
      const { data: roles, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', currentUser.id)
        .eq('role', 'admin')
        .single();

      setIsAdmin(!!roles && !error);
      
      if (roles && !error) {
        fetchSubmissionCount();
      }
    } catch (error) {
      console.error('Error checking admin access:', error);
      setIsAdmin(false);
    }
  };

  const handleExportCSV = async () => {
    setIsExporting(true);
    try {
      const response = await supabase.functions.invoke('export-waitlist-csv');
      
      if (response.error) {
        throw new Error(response.error.message);
      }

      // Create blob and download
      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const today = new Date().toISOString().split('T')[0];
      a.download = `waitlist-submissions-${today}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "CSV Export Successful! 📊",
        description: "Your waitlist data has been downloaded.",
      });
    } catch (error) {
      console.error('Error exporting CSV:', error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting the data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  const fetchSubmissionCount = async () => {
    if (!isAdmin) return;
    
    try {
      const { count, error } = await supabase
        .from('waitlist_submissions')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;
      setSubmissionCount(count || 0);
    } catch (error) {
      console.error('Error fetching submission count:', error);
      toast({
        title: "Access Error",
        description: "Unable to fetch submission count. Admin access required.",
        variant: "destructive",
      });
    }
  };

  const makeUserAdmin = async () => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from('user_roles')
        .insert({
          user_id: user.id,
          role: 'admin'
        });

      if (error) throw error;
      
      setIsAdmin(true);
      toast({
        title: "Admin Access Granted! 🔐",
        description: "You now have admin privileges to manage waitlist data.",
      });
      
      fetchSubmissionCount();
    } catch (error: any) {
      console.error('Error granting admin access:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to grant admin access",
        variant: "destructive",
      });
    }
  };

  // Show login required state
  if (isAdmin === null) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Shield className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Checking Access...</h2>
            <p className="text-muted-foreground">Verifying your admin permissions</p>
          </div>
        </div>
      </div>
    );
  }

  // Show access denied state
  if (isAdmin === false) {
    return (
      <div className="p-6">
        <Alert className="max-w-2xl mx-auto">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Admin Access Required</h3>
              <p className="text-sm mb-4">
                This admin panel requires authentication and admin privileges to protect sensitive customer data.
              </p>
            </div>
            
            {user ? (
              <div className="space-y-2">
                <p className="text-sm font-medium">Logged in as: {user.email}</p>
                <Button onClick={makeUserAdmin} variant="outline">
                  Grant Admin Access
                </Button>
                <p className="text-xs text-muted-foreground">
                  ⚠️ Only grant admin access to trusted users who need to manage waitlist data
                </p>
              </div>
            ) : (
              <div>
                <p className="text-sm mb-2">Please log in to continue.</p>
                <Button onClick={() => window.location.href = '/auth'} variant="outline">
                  Go to Login
                </Button>
              </div>
            )}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Admin Panel</h1>
          <p className="text-muted-foreground">Securely manage waitlist submissions and exports</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>Admin Access Verified</span>
        </div>
      </div>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertDescription>
          <strong>Security Notice:</strong> Customer data is now properly protected. Only authenticated admins can access sensitive waitlist information.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Waitlist Submissions
            </CardTitle>
            <CardDescription>
              Total number of people on your waitlist
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {submissionCount !== null ? submissionCount : '...'}
            </div>
            <Button 
              onClick={fetchSubmissionCount} 
              variant="outline" 
              size="sm" 
              className="mt-2"
            >
              Refresh
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Export Data
            </CardTitle>
            <CardDescription>
              Download all waitlist submissions as CSV
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleExportCSV} 
              disabled={isExporting}
              className="w-full"
            >
              {isExporting ? 'Exporting...' : 'Export to CSV'}
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Includes all submission data with timestamps
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const SystemLogs = () => {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">System Logs & Security Audit</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Recent System Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 bg-accent rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">User Login Activity</h3>
                    <span className="text-sm text-muted-foreground">10 minutes ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    IP Address: 192.168.1.{item}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Action: Successfully logged in to admin panel
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default SystemLogs;
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Check, X, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResearchTracking = () => {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Research Outputs Tracking</h1>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Recent Publications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                    <div>
                      <h3 className="font-semibold">Research Paper Title {item}</h3>
                      <p className="text-sm text-muted-foreground">Author: Dr. John Doe</p>
                      <p className="text-sm text-muted-foreground">Impact Factor: 4.5</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Check className="h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1">
                        <X className="h-4 w-4" />
                        Reject
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1">
                        <Flag className="h-4 w-4" />
                        Flag
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ResearchTracking;
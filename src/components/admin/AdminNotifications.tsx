import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

export const AdminNotifications = () => {
  const notifications = [
    {
      title: "New Faculty Registration",
      description: "Dr. Sarah Johnson has registered as a new faculty member.",
      time: "2 hours ago",
    },
    {
      title: "Appraisal Deadline",
      description: "15 faculty members have pending appraisals due this week.",
      time: "5 hours ago",
    },
    {
      title: "Research Publication",
      description: "New research paper submitted for review by Dr. Michael Chen.",
      time: "1 day ago",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-primary" />
          <CardTitle>Recent Notifications</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <div>
                <h4 className="font-semibold">{notification.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
                <span className="text-xs text-muted-foreground">
                  {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
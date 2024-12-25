import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const AdminNotifications = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Faculty Registration",
      description: "Dr. Sarah Johnson has registered as a new faculty member.",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      title: "Appraisal Deadline",
      description: "15 faculty members have pending appraisals due this week.",
      time: "5 hours ago",
      unread: true,
    },
    {
      id: 3,
      title: "Research Publication",
      description: "New research paper submitted for review by Dr. Michael Chen.",
      time: "1 day ago",
      unread: false,
    },
  ]);

  const handleMarkAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
    toast({
      title: "Notification Updated",
      description: "Marked as read successfully.",
    });
  };

  const handleDismiss = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    toast({
      title: "Notification Dismissed",
      description: "Notification has been removed.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Recent Notifications</CardTitle>
          </div>
          {notifications.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNotifications([]);
                toast({
                  title: "Notifications Cleared",
                  description: "All notifications have been cleared.",
                });
              }}
            >
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              No new notifications
            </p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start justify-between p-3 rounded-lg transition-colors ${
                  notification.unread
                    ? "bg-accent/50"
                    : "hover:bg-accent transition-colors"
                }`}
              >
                <div className="space-y-1">
                  <h4 className="font-semibold flex items-center gap-2">
                    {notification.title}
                    {notification.unread && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                        New
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
                <div className="flex gap-2">
                  {notification.unread && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleMarkAsRead(notification.id)}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDismiss(notification.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
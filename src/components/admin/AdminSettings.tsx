import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Moon, Globe, Lock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const AdminSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    twoFactorAuth: false,
    language: "English",
  });

  const handleSettingChange = (setting: string, value: boolean) => {
    setSettings((prev) => ({ ...prev, [setting]: value }));
    toast({
      title: "Settings Updated",
      description: `${setting} has been ${value ? "enabled" : "disabled"}.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          System Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications about important updates
            </p>
          </div>
          <Switch
            checked={settings.emailNotifications}
            onCheckedChange={(checked) =>
              handleSettingChange("emailNotifications", checked)
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Dark Mode</Label>
            <p className="text-sm text-muted-foreground">
              Toggle dark mode appearance
            </p>
          </div>
          <Switch
            checked={settings.darkMode}
            onCheckedChange={(checked) => handleSettingChange("darkMode", checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Two-Factor Authentication</Label>
            <p className="text-sm text-muted-foreground">
              Enable additional security layer
            </p>
          </div>
          <Switch
            checked={settings.twoFactorAuth}
            onCheckedChange={(checked) =>
              handleSettingChange("twoFactorAuth", checked)
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};
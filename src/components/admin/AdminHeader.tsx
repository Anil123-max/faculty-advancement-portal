import { Button } from "@/components/ui/button";
import { Bell, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    navigate("/admin/login");
  };

  return (
    <header className="bg-white border-b border-border">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-lg">Faculty Admin Panel</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" onClick={handleLogout} className="gap-2">
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
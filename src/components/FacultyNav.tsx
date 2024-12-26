import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Award, FileText, User, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const FacultyNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/research", label: "Research", icon: BookOpen },
    { href: "/career", label: "Career", icon: Award },
    { href: "/appraisals", label: "Appraisals", icon: FileText },
    { href: "/profile", label: "Profile", icon: User },
  ];

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-4">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          to={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2",
            location.pathname === href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </Link>
      ))}
      <Button
        variant="ghost"
        onClick={handleLogout}
        className="flex items-center space-x-2"
      >
        <LogOut className="h-4 w-4" />
        <span>Sign Out</span>
      </Button>
    </nav>
  );
};

export default FacultyNav;
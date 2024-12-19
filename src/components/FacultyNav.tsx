import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Award, FileText, User } from "lucide-react";

const FacultyNav = () => {
  const location = useLocation();

  const navItems = [
    { href: "/research", label: "Research", icon: BookOpen },
    { href: "/career", label: "Career", icon: Award },
    { href: "/appraisals", label: "Appraisals", icon: FileText },
    { href: "/profile", label: "Profile", icon: User },
  ];

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
    </nav>
  );
};

export default FacultyNav;
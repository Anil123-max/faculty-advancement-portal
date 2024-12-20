import { Link, useLocation } from "react-router-dom";
import {
  BarChart,
  FileText,
  Users,
  BookOpen,
  Calendar,
  Shield,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart,
    path: "/admin/dashboard",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/admin/reports",
  },
  {
    title: "Faculty",
    icon: Users,
    path: "/admin/faculty",
  },
  {
    title: "Research",
    icon: BookOpen,
    path: "/admin/research",
  },
  {
    title: "Events",
    icon: Calendar,
    path: "/admin/events",
  },
  {
    title: "System Logs",
    icon: Shield,
    path: "/admin/logs",
  },
  {
    title: "Profile",
    icon: User,
    path: "/admin/profile",
  },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-border min-h-[calc(100vh-4rem)]">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors",
              location.pathname === item.path
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, FileText, User } from "lucide-react";
import { NavigateFunction } from "react-router-dom";

interface DashboardMetricsProps {
  navigate: NavigateFunction;
}

const menuItems = [
  {
    title: "Research Publications",
    icon: BookOpen,
    description: "Track and manage your research outputs",
    route: "/research",
    stats: "15 Papers",
  },
  {
    title: "Career Progress",
    icon: Award,
    description: "View your career advancement status",
    route: "/career",
    stats: "Level 3",
  },
  {
    title: "Appraisals",
    icon: FileText,
    description: "Access your performance appraisals",
    route: "/appraisals",
    stats: "2 Pending",
  },
  {
    title: "Profile",
    icon: User,
    description: "Manage your personal information",
    route: "/profile",
    stats: "Updated",
  },
];

const DashboardMetrics = ({ navigate }: DashboardMetricsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => navigate(item.route)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {item.stats}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardMetrics;
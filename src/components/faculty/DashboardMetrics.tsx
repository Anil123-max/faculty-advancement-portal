import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, BookMarked, GraduationCap } from "lucide-react";

const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Publications",
      value: "23",
      description: "Total research papers",
      icon: BookMarked,
      trend: "+5 this year",
    },
    {
      title: "Citations",
      value: "156",
      description: "Total citations",
      icon: TrendingUp,
      trend: "+32 this year",
    },
    {
      title: "Collaborations",
      value: "12",
      description: "Active collaborations",
      icon: Users,
      trend: "+3 this month",
    },
    {
      title: "Teaching Hours",
      value: "180",
      description: "This semester",
      icon: GraduationCap,
      trend: "On track",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
              <p className="text-xs text-primary mt-1">{metric.trend}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardMetrics;
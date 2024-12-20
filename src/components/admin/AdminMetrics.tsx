import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FileText, Award } from "lucide-react";

export const AdminMetrics = () => {
  const metrics = [
    {
      title: "Total Faculty",
      value: "124",
      icon: Users,
      change: "+4%",
    },
    {
      title: "Research Papers",
      value: "842",
      icon: BookOpen,
      change: "+12%",
    },
    {
      title: "Pending Appraisals",
      value: "23",
      icon: FileText,
      change: "-2%",
    },
    {
      title: "Achievements",
      value: "156",
      icon: Award,
      change: "+8%",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
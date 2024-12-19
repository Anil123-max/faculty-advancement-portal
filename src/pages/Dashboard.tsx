import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Award, 
  FileText, 
  User,
  LogOut
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Research Publications",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Track and manage your research outputs",
      onClick: () => navigate("/research"),
    },
    {
      title: "Career Progress",
      icon: <Award className="w-6 h-6" />,
      description: "View your career advancement status",
      onClick: () => navigate("/career"),
    },
    {
      title: "Appraisals",
      icon: <FileText className="w-6 h-6" />,
      description: "Access your performance appraisals",
      onClick: () => navigate("/appraisals"),
    },
    {
      title: "Profile",
      icon: <User className="w-6 h-6" />,
      description: "Manage your personal information",
      onClick: () => navigate("/profile"),
    },
  ];

  return (
    <div className="min-h-screen bg-accent">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Faculty Dashboard</h1>
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={item.onClick}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
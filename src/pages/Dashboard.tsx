import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Award, 
  FileText, 
  User,
  LogOut,
  TrendingUp,
  Users,
  BookMarked,
  GraduationCap
} from "lucide-react";
import FacultyNav from "@/components/FacultyNav";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const performanceData = [
  { month: "Jan", publications: 4, citations: 8, projects: 2 },
  { month: "Feb", publications: 3, citations: 12, projects: 3 },
  { month: "Mar", publications: 5, citations: 15, projects: 2 },
  { month: "Apr", publications: 2, citations: 10, projects: 4 },
  { month: "May", publications: 6, citations: 18, projects: 3 },
  { month: "Jun", publications: 4, citations: 20, projects: 5 },
];

const researchDistribution = [
  { name: "Journal Articles", value: 35 },
  { name: "Conference Papers", value: 25 },
  { name: "Book Chapters", value: 20 },
  { name: "Patents", value: 20 },
];

const COLORS = ["#8BA888", "#E07A5F", "#3D405B", "#81B29A"];

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Research Publications",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Track and manage your research outputs",
      onClick: () => navigate("/research"),
      stats: "15 Papers",
    },
    {
      title: "Career Progress",
      icon: <Award className="w-6 h-6" />,
      description: "View your career advancement status",
      onClick: () => navigate("/career"),
      stats: "Level 3",
    },
    {
      title: "Appraisals",
      icon: <FileText className="w-6 h-6" />,
      description: "Access your performance appraisals",
      onClick: () => navigate("/appraisals"),
      stats: "2 Pending",
    },
    {
      title: "Profile",
      icon: <User className="w-6 h-6" />,
      description: "Manage your personal information",
      onClick: () => navigate("/profile"),
      stats: "Updated",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-accent">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Faculty Dashboard</h1>
            <div className="flex items-center space-x-4">
              <FacultyNav />
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={item.onClick}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {item.icon}
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
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]" config={{}}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="publications"
                    stroke="#8BA888"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="citations"
                    stroke="#E07A5F"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="projects"
                    stroke="#3D405B"
                    strokeWidth={2}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]" config={{}}>
                <PieChart>
                  <Pie
                    data={researchDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {researchDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
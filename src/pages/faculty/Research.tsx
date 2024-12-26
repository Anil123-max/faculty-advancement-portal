import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, FileText, Users } from "lucide-react";
import FacultyLayout from "@/components/FacultyLayout";

const Research = () => {
  const recentPublications = [
    {
      title: "Deep Learning Approaches in Modern Computer Vision",
      journal: "IEEE Transactions on AI",
      date: "2024",
      citations: 45,
    },
    {
      title: "Natural Language Processing in Healthcare",
      journal: "Journal of Medical Informatics",
      date: "2023",
      citations: 32,
    },
    {
      title: "Advances in Robotics and Automation",
      journal: "Robotics Today",
      date: "2023",
      citations: 28,
    },
  ];

  const researchTrends = [
    {
      topic: "Generative AI",
      growth: "+156%",
      description: "Recent advances in large language models and image generation",
    },
    {
      topic: "Quantum Computing",
      growth: "+89%",
      description: "Developments in quantum algorithms and applications",
    },
    {
      topic: "Edge Computing",
      growth: "+67%",
      description: "Distributed computing and IoT applications",
    },
  ];

  return (
    <FacultyLayout>
      <div className="space-y-6">
        {/* Research Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-muted-foreground">Publications</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">487</p>
                  <p className="text-muted-foreground">Citations</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-muted-foreground">Active Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Publications */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentPublications.map((pub, index) => (
                <div key={index} className="flex justify-between items-start border-b pb-4 last:border-0">
                  <div>
                    <h3 className="font-medium">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">{pub.journal}, {pub.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{pub.citations} citations</p>
                    <Button variant="link" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Research Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {researchTrends.map((trend, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{trend.topic}</h3>
                      <span className="text-sm text-green-600">{trend.growth}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{trend.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  );
};

export default Research;
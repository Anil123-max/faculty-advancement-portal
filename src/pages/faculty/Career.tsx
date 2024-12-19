import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import FacultyLayout from "@/components/FacultyLayout";

const Career = () => {
  return (
    <FacultyLayout>
      <div className="space-y-6">
        {/* Career Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Career Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Research Publications</span>
                  <span className="text-sm text-muted-foreground">7/10</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Teaching Experience</span>
                  <span className="text-sm text-muted-foreground">5/6 years</span>
                </div>
                <Progress value={83} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Project Leadership</span>
                  <span className="text-sm text-muted-foreground">4/5</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Professional Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-medium mb-2">Upcoming Training</h3>
                  <p className="text-sm text-muted-foreground mb-4">Advanced Research Methodologies Workshop</p>
                  <Button size="sm">Register Now</Button>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h3 className="font-medium mb-2">Certification Track</h3>
                  <p className="text-sm text-muted-foreground mb-4">Advanced Teaching Methods Certification</p>
                  <Button variant="secondary" size="sm">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { year: "2023", achievement: "Best Teacher Award" },
                  { year: "2022", achievement: "Research Excellence Recognition" },
                  { year: "2021", achievement: "Department Leadership Award" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <span className="text-sm font-medium">{item.year}</span>
                    </div>
                    <p className="font-medium">{item.achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Path */}
        <Card>
          <CardHeader>
            <CardTitle>Career Path</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-primary/20" />
              <div className="space-y-8">
                {[
                  { role: "Professor", year: "Current", status: "active" },
                  { role: "Associate Professor", year: "2020-2023", status: "completed" },
                  { role: "Assistant Professor", year: "2017-2020", status: "completed" },
                  { role: "Lecturer", year: "2015-2017", status: "completed" },
                ].map((position, index) => (
                  <div key={index} className="relative flex items-center gap-6">
                    <div className={`w-3 h-3 rounded-full ${
                      position.status === "active" ? "bg-primary" : "bg-primary/20"
                    } ring-4 ring-primary/10`} />
                    <div>
                      <p className="font-medium">{position.role}</p>
                      <p className="text-sm text-muted-foreground">{position.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  );
};

export default Career;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Career = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Career Progress</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Promotion Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Research Publications</span>
                  <span>7/10</span>
                </div>
                <Progress value={70} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Teaching Experience</span>
                  <span>5/6 years</span>
                </div>
                <Progress value={83} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Career;
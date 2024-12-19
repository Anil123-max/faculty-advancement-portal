import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Appraisals = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Performance Appraisals</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Latest Appraisal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No appraisals available yet.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Appraisals;
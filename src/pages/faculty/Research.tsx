import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Research = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Research Publications</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No publications found. Start adding your research work.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Research;
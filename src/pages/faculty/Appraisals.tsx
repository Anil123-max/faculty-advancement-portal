import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FacultyLayout from "@/components/FacultyLayout";
import AppraisalForm from "@/components/faculty/AppraisalForm";
import PreviousAppraisals from "@/components/faculty/PreviousAppraisals";

const Appraisals = () => {
  const [progress] = useState(0);

  return (
    <FacultyLayout>
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Faculty Appraisal System</h1>
          <Progress value={progress} className="w-[200px]" />
        </div>

        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="new">New Appraisal</TabsTrigger>
            <TabsTrigger value="previous">Previous Appraisals</TabsTrigger>
          </TabsList>

          <TabsContent value="new">
            <AppraisalForm />
          </TabsContent>

          <TabsContent value="previous">
            <PreviousAppraisals />
          </TabsContent>
        </Tabs>
      </div>
    </FacultyLayout>
  );
};

export default Appraisals;
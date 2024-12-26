import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppraisalReport from "./AppraisalReport";

interface Appraisal {
  id: number;
  year: string;
  rating: string;
  highlights: string;
  status: string;
  details?: {
    teachingPerformance?: string;
    researchOutput?: string;
    departmentContributions?: string;
    studentFeedback?: string;
    goals?: string;
    recommendations?: string;
  };
}

const previousAppraisals: Appraisal[] = [
  {
    id: 1,
    year: "2023",
    rating: "Excellent",
    highlights: "Outstanding research contributions and teaching performance",
    status: "Approved",
    details: {
      teachingPerformance: "Consistently high student evaluations and innovative teaching methods",
      researchOutput: "Published 3 papers in top-tier journals",
      departmentContributions: "Led curriculum development committee",
      studentFeedback: "Average rating of 4.8/5.0",
      goals: "Focus on expanding research collaborations",
      recommendations: "Consider taking on more leadership roles in department initiatives"
    }
  },
  {
    id: 2,
    year: "2022",
    rating: "Very Good",
    highlights: "Significant improvement in research output",
    status: "Approved",
    details: {
      teachingPerformance: "Effective teaching methods with good student engagement",
      researchOutput: "2 journal publications and 1 conference paper",
      departmentContributions: "Active participation in department committees",
      studentFeedback: "Average rating of 4.5/5.0",
      goals: "Enhance teaching methodology",
      recommendations: "Continue research momentum and publish in high-impact journals"
    }
  },
  {
    id: 3,
    year: "2021",
    rating: "Good",
    highlights: "Consistent teaching performance",
    status: "Approved",
    details: {
      teachingPerformance: "Maintained good teaching standards",
      researchOutput: "1 journal publication",
      departmentContributions: "Regular participation in department activities",
      studentFeedback: "Average rating of 4.2/5.0",
      goals: "Increase research output",
      recommendations: "Focus on publishing in higher impact journals"
    }
  },
];

const PreviousAppraisals = () => {
  const [selectedAppraisal, setSelectedAppraisal] = useState<Appraisal | null>(null);

  return (
    <div className="grid gap-6">
      {previousAppraisals.map((appraisal) => (
        <Card key={appraisal.id} className="animate-fade-up">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Academic Year {appraisal.year}</CardTitle>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {appraisal.status}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Overall Rating:</span>
                <span className="ml-2">{appraisal.rating}</span>
              </div>
              <div>
                <span className="font-semibold">Highlights:</span>
                <p className="mt-1 text-muted-foreground">
                  {appraisal.highlights}
                </p>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setSelectedAppraisal(appraisal)}
              >
                View Full Report
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {selectedAppraisal && (
        <AppraisalReport
          report={selectedAppraisal}
          isOpen={!!selectedAppraisal}
          onClose={() => setSelectedAppraisal(null)}
        />
      )}
    </div>
  );
};

export default PreviousAppraisals;
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AppraisalReportProps {
  appraisal: {
    id: number;
    year: string;
    rating: string;
    highlights: string;
    status: string;
    details?: {
      teachingPerformance?: string;
      researchOutput?: string;
      administrativeDuties?: string;
      studentFeedback?: string;
      achievements?: string[];
      recommendations?: string[];
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

const AppraisalReport = ({ appraisal, isOpen, onClose }: AppraisalReportProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Appraisal Report - Academic Year {appraisal.year}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh]">
          <div className="space-y-6 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Overall Rating: {appraisal.rating}</h2>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                {appraisal.status}
              </span>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appraisal.details?.teachingPerformance && (
                    <div>
                      <h3 className="font-semibold">Teaching Performance</h3>
                      <p className="text-muted-foreground">
                        {appraisal.details.teachingPerformance}
                      </p>
                    </div>
                  )}
                  {appraisal.details?.researchOutput && (
                    <div>
                      <h3 className="font-semibold">Research Output</h3>
                      <p className="text-muted-foreground">
                        {appraisal.details.researchOutput}
                      </p>
                    </div>
                  )}
                  {appraisal.details?.administrativeDuties && (
                    <div>
                      <h3 className="font-semibold">Administrative Duties</h3>
                      <p className="text-muted-foreground">
                        {appraisal.details.administrativeDuties}
                      </p>
                    </div>
                  )}
                  {appraisal.details?.studentFeedback && (
                    <div>
                      <h3 className="font-semibold">Student Feedback</h3>
                      <p className="text-muted-foreground">
                        {appraisal.details.studentFeedback}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {appraisal.details?.achievements && (
              <Card>
                <CardHeader>
                  <CardTitle>Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {appraisal.details.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {appraisal.details?.recommendations && (
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {appraisal.details.recommendations.map((recommendation, index) => (
                      <li key={index} className="text-muted-foreground">
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AppraisalReport;
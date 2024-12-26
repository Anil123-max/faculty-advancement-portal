import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AppraisalReport {
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

interface AppraisalReportProps {
  report: AppraisalReport;
  isOpen: boolean;
  onClose: () => void;
}

const AppraisalReport = ({ report, isOpen, onClose }: AppraisalReportProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Appraisal Report {report.year}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="space-y-4 p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Overall Rating</h3>
                <p className="text-muted-foreground">{report.rating}</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {report.status}
              </span>
            </div>
            
            <div>
              <h3 className="font-semibold">Highlights</h3>
              <p className="text-muted-foreground">{report.highlights}</p>
            </div>

            {report.details && (
              <>
                {report.details.teachingPerformance && (
                  <div>
                    <h3 className="font-semibold">Teaching Performance</h3>
                    <p className="text-muted-foreground">{report.details.teachingPerformance}</p>
                  </div>
                )}
                
                {report.details.researchOutput && (
                  <div>
                    <h3 className="font-semibold">Research Output</h3>
                    <p className="text-muted-foreground">{report.details.researchOutput}</p>
                  </div>
                )}
                
                {report.details.departmentContributions && (
                  <div>
                    <h3 className="font-semibold">Department Contributions</h3>
                    <p className="text-muted-foreground">{report.details.departmentContributions}</p>
                  </div>
                )}
                
                {report.details.studentFeedback && (
                  <div>
                    <h3 className="font-semibold">Student Feedback</h3>
                    <p className="text-muted-foreground">{report.details.studentFeedback}</p>
                  </div>
                )}
                
                {report.details.goals && (
                  <div>
                    <h3 className="font-semibold">Goals and Objectives</h3>
                    <p className="text-muted-foreground">{report.details.goals}</p>
                  </div>
                )}
                
                {report.details.recommendations && (
                  <div>
                    <h3 className="font-semibold">Recommendations</h3>
                    <p className="text-muted-foreground">{report.details.recommendations}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </ScrollArea>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppraisalReport;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Publication {
  title: string;
  journal: string;
  date: string;
  citations: number;
  abstract?: string;
  authors?: string[];
  doi?: string;
}

interface PublicationDetailsProps {
  publication: Publication;
  isOpen: boolean;
  onClose: () => void;
}

const PublicationDetails = ({ publication, isOpen, onClose }: PublicationDetailsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{publication.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="space-y-4 p-4">
            <div>
              <h3 className="font-semibold">Journal</h3>
              <p className="text-muted-foreground">{publication.journal}</p>
            </div>
            <div>
              <h3 className="font-semibold">Publication Date</h3>
              <p className="text-muted-foreground">{publication.date}</p>
            </div>
            <div>
              <h3 className="font-semibold">Citations</h3>
              <p className="text-muted-foreground">{publication.citations}</p>
            </div>
            {publication.abstract && (
              <div>
                <h3 className="font-semibold">Abstract</h3>
                <p className="text-muted-foreground">{publication.abstract}</p>
              </div>
            )}
            {publication.authors && (
              <div>
                <h3 className="font-semibold">Authors</h3>
                <p className="text-muted-foreground">{publication.authors.join(", ")}</p>
              </div>
            )}
            {publication.doi && (
              <div>
                <h3 className="font-semibold">DOI</h3>
                <p className="text-muted-foreground">{publication.doi}</p>
              </div>
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

export default PublicationDetails;
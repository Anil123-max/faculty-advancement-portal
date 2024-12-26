import { Card, CardContent } from "@/components/ui/card";
import FacultyLayout from "@/components/FacultyLayout";
import EditableProfile from "@/components/faculty/EditableProfile";

const Profile = () => {
  return (
    <FacultyLayout>
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <EditableProfile />
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  );
};

export default Profile;
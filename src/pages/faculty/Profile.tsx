import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Profile = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Faculty Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name">Full Name</label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" defaultValue="faculty@example.com" readOnly />
              </div>
              <div className="space-y-2">
                <label htmlFor="department">Department</label>
                <Input id="department" defaultValue="Computer Science" />
              </div>
              <div className="space-y-2">
                <label htmlFor="position">Position</label>
                <Input id="position" defaultValue="Associate Professor" />
              </div>
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import FacultyLayout from "@/components/FacultyLayout";
import { User, Mail, Phone, MapPin, GraduationCap, BookOpen } from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Dr. John Doe",
    email: "john.doe@university.edu",
    phone: "+1 (555) 123-4567",
    office: "Building A, Room 301",
    department: "Computer Science",
    specialization: "Artificial Intelligence",
    bio: "Dr. John Doe is a Professor of Computer Science with over 10 years of experience in artificial intelligence and machine learning research.",
    publications: "23",
    citations: "156",
    hIndex: "12"
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <FacultyLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          ) : (
            <div className="space-x-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          )}
        </div>

        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{profileData.fullName}</h2>
                    <p className="text-muted-foreground">{profileData.department}</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Full Name</Label>
                    <Input
                      value={profileData.fullName}
                      onChange={(e) =>
                        setProfileData({ ...profileData, fullName: e.target.value })
                      }
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Email</Label>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <Input
                          value={profileData.email}
                          onChange={(e) =>
                            setProfileData({ ...profileData, email: e.target.value })
                          }
                          disabled={true}
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label>Phone</Label>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <Input
                          value={profileData.phone}
                          onChange={(e) =>
                            setProfileData({ ...profileData, phone: e.target.value })
                          }
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Office Location</Label>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <Input
                          value={profileData.office}
                          onChange={(e) =>
                            setProfileData({ ...profileData, office: e.target.value })
                          }
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label>Department</Label>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <Input
                          value={profileData.department}
                          onChange={(e) =>
                            setProfileData({ ...profileData, department: e.target.value })
                          }
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Specialization</Label>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <Input
                        value={profileData.specialization}
                        onChange={(e) =>
                          setProfileData({ ...profileData, specialization: e.target.value })
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Bio</Label>
                    <Textarea
                      value={profileData.bio}
                      onChange={(e) =>
                        setProfileData({ ...profileData, bio: e.target.value })
                      }
                      disabled={!isEditing}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Academic Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Publications</p>
                  <p className="text-2xl font-bold">{profileData.publications}</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Citations</p>
                  <p className="text-2xl font-bold">{profileData.citations}</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">h-index</p>
                  <p className="text-2xl font-bold">{profileData.hIndex}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </FacultyLayout>
  );
};

export default Profile;
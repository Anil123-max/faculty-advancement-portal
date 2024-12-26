import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { GraduationCap, BookOpen, Award, Mail, Phone, MapPin } from "lucide-react";
import FacultyLayout from "@/components/FacultyLayout";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    email: "john.doe@university.edu",
    phone: "+1 (555) 123-4567",
    office: "Building A, Room 301",
    bio: "Dr. John Doe is a Professor of Computer Science with over 10 years of experience in academic research and teaching. His research focuses on artificial intelligence and machine learning, with particular emphasis on computer vision and natural language processing.",
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
        <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-2 flex-1">
            {isEditing ? (
              <Input 
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="text-2xl font-bold"
              />
            ) : (
              <h2 className="text-2xl font-bold">{profile.name}</h2>
            )}
            {isEditing ? (
              <Input 
                value={profile.title}
                onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                className="text-muted-foreground"
              />
            ) : (
              <p className="text-muted-foreground">{profile.title}</p>
            )}
            <div className="flex items-center gap-4">
              {isEditing ? (
                <>
                  <Button onClick={handleSave} variant="default">Save Changes</Button>
                  <Button onClick={() => setIsEditing(false)} variant="outline">Cancel</Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} variant="outline">Edit Profile</Button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input 
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Office Location</label>
                    <Input 
                      value={profile.office}
                      onChange={(e) => setProfile({ ...profile, office: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input value={profile.email} readOnly />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input value={profile.phone} readOnly />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Office Location</label>
                    <Input value={profile.office} readOnly />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Academic Qualifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Academic Qualifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium">Ph.D. in Computer Science</p>
                <p className="text-sm text-muted-foreground">Stanford University, 2015</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">M.S. in Computer Science</p>
                <p className="text-sm text-muted-foreground">MIT, 2012</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">B.Tech in Computer Science</p>
                <p className="text-sm text-muted-foreground">IIT Delhi, 2010</p>
              </div>
            </CardContent>
          </Card>

          {/* Research Interests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Research Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {["Artificial Intelligence", "Machine Learning", "Computer Vision", 
                    "Natural Language Processing", "Robotics"].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Recognition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Awards & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium">Outstanding Research Award</p>
                <p className="text-sm text-muted-foreground">University of Excellence, 2023</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Best Paper Award</p>
                <p className="text-sm text-muted-foreground">International Conference on AI, 2022</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Teaching Excellence Award</p>
                <p className="text-sm text-muted-foreground">Department of Computer Science, 2021</p>
              </div>
            </CardContent>
          </Card>

        </div>

        <Card>
          <CardHeader>
            <CardTitle>Biography</CardTitle>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <Textarea 
                className="min-h-[150px]"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />
            ) : (
              <Textarea 
                className="min-h-[150px] resize-none"
                value={profile.bio}
                readOnly
              />
            )}
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  );
};

export default Profile;

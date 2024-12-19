import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, BookOpen, Award, Mail, Phone, MapPin } from "lucide-react";
import FacultyLayout from "@/components/FacultyLayout";

const Profile = () => {
  return (
    <FacultyLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Dr. John Doe</h2>
            <p className="text-muted-foreground">Professor of Computer Science</p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">Edit Profile</Button>
              <Button variant="outline" size="sm">Change Photo</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input value="john.doe@university.edu" readOnly />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input value="+1 (555) 123-4567" readOnly />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Office Location</label>
                <Input value="Building A, Room 301" readOnly />
              </div>
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

        {/* Bio */}
        <Card>
          <CardHeader>
            <CardTitle>Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="min-h-[150px] resize-none"
              value="Dr. John Doe is a Professor of Computer Science with over 10 years of experience in academic research and teaching. His research focuses on artificial intelligence and machine learning, with particular emphasis on computer vision and natural language processing. He has published extensively in top-tier conferences and journals, and has received multiple awards for his contributions to the field."
              readOnly
            />
          </CardContent>
        </Card>
      </div>
    </FacultyLayout>
  );
};

export default Profile;
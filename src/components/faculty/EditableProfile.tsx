import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

interface ProfileField {
  label: string;
  value: string;
  type: "text" | "email" | "tel" | "textarea";
  editable: boolean;
}

const EditableProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileField[]>([
    { label: "Full Name", value: "Dr. John Doe", type: "text", editable: true },
    { label: "Email", value: "john.doe@university.edu", type: "email", editable: false },
    { label: "Phone", value: "+1 (555) 123-4567", type: "tel", editable: true },
    { label: "Office Location", value: "Building A, Room 301", type: "text", editable: true },
    { label: "Department", value: "Computer Science", type: "text", editable: false },
    { label: "Specialization", value: "Artificial Intelligence", type: "text", editable: true },
    { label: "Bio", value: "Dr. John Doe is a Professor of Computer Science with over 10 years of experience...", type: "textarea", editable: true },
  ]);

  const handleFieldChange = (index: number, newValue: string) => {
    const newData = [...profileData];
    newData[index] = { ...newData[index], value: newValue };
    setProfileData(newData);
  };

  const handleSave = () => {
    // Here you would typically make an API call to save the changes
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Profile Information</h2>
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
        {profileData.map((field, index) => (
          <div key={index} className="space-y-2">
            <Label htmlFor={`field-${index}`}>{field.label}</Label>
            {field.type === "textarea" ? (
              <Textarea
                id={`field-${index}`}
                value={field.value}
                onChange={(e) => handleFieldChange(index, e.target.value)}
                disabled={!isEditing || !field.editable}
                className={!field.editable ? "bg-muted" : ""}
              />
            ) : (
              <Input
                id={`field-${index}`}
                type={field.type}
                value={field.value}
                onChange={(e) => handleFieldChange(index, e.target.value)}
                disabled={!isEditing || !field.editable}
                className={!field.editable ? "bg-muted" : ""}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditableProfile;
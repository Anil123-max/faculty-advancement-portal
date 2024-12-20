import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FacultyLayout from "@/components/FacultyLayout";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  teachingHours: z.string().min(1, "Teaching hours is required"),
  researchPublications: z.string().min(1, "Research publications is required"),
  projectsUndertaken: z.string().min(1, "Projects undertaken is required"),
  achievements: z.string().min(1, "Achievements is required"),
  goals: z.string().min(1, "Future goals is required"),
  challenges: z.string().min(1, "Challenges is required"),
  studentFeedback: z.string().min(1, "Student feedback is required"),
  professionalDevelopment: z.string().min(1, "Professional development is required"),
  departmentContributions: z.string().min(1, "Department contributions is required"),
});

const previousAppraisals = [
  {
    id: 1,
    year: "2023",
    rating: "Excellent",
    highlights: "Outstanding research contributions and teaching performance",
    status: "Approved",
  },
  {
    id: 2,
    year: "2022",
    rating: "Very Good",
    highlights: "Significant improvement in research output",
    status: "Approved",
  },
  {
    id: 3,
    year: "2021",
    rating: "Good",
    highlights: "Consistent teaching performance",
    status: "Approved",
  },
];

const Appraisals = () => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teachingHours: "",
      researchPublications: "",
      projectsUndertaken: "",
      achievements: "",
      goals: "",
      challenges: "",
      studentFeedback: "",
      professionalDevelopment: "",
      departmentContributions: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Appraisal Submitted",
      description: "Your appraisal form has been submitted successfully.",
    });
  };

  return (
    <FacultyLayout>
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Faculty Appraisal System</h1>
          <Progress value={progress} className="w-[200px]" />
        </div>

        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="new">New Appraisal</TabsTrigger>
            <TabsTrigger value="previous">Previous Appraisals</TabsTrigger>
          </TabsList>

          <TabsContent value="new">
            <Card>
              <CardHeader>
                <CardTitle>Annual Performance Review 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="teachingHours"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teaching Hours</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter total teaching hours" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="researchPublications"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Research Publications</FormLabel>
                            <FormControl>
                              <Input placeholder="Number of publications" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="projectsUndertaken"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Projects Undertaken</FormLabel>
                            <FormControl>
                              <Input placeholder="Number of projects" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="studentFeedback"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Student Feedback Score</FormLabel>
                            <FormControl>
                              <Input placeholder="Average feedback score" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="achievements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Key Achievements</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="List your key achievements"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="professionalDevelopment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Development Activities</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="List workshops, conferences, certifications attended"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="departmentContributions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department Contributions</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your contributions to the department"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Future Goals</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your future goals"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="challenges"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Challenges Faced</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe any challenges"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Submit Appraisal
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="previous">
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
                      <Button variant="outline" className="w-full">
                        View Full Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </FacultyLayout>
  );
};

export default Appraisals;
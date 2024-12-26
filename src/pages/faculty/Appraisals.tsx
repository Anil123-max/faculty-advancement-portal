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
import AppraisalReport from "@/components/faculty/AppraisalReport";

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
    details: {
      teachingPerformance: "Demonstrated exceptional teaching skills with innovative methodologies. Student satisfaction rate of 95%.",
      researchOutput: "Published 4 high-impact papers in top-tier journals. Secured 2 major research grants.",
      administrativeDuties: "Successfully led the department's curriculum revision committee.",
      studentFeedback: "Consistently received positive feedback for clarity of instruction and availability for consultation.",
      achievements: [
        "Received the Outstanding Faculty Award",
        "Successfully mentored 3 PhD students to completion",
        "Organized international conference on AI in Education"
      ],
      recommendations: [
        "Continue mentoring junior faculty members",
        "Consider developing new courses in emerging technologies",
        "Expand research collaborations with industry partners"
      ]
    }
  },
  {
    id: 2,
    year: "2022",
    rating: "Very Good",
    highlights: "Significant improvement in research output",
    status: "Approved",
    details: {
      teachingPerformance: "Maintained high teaching standards across undergraduate and graduate courses.",
      researchOutput: "Published 3 papers in reputed journals. Increased citation count by 40%.",
      administrativeDuties: "Active participation in faculty recruitment and department committees.",
      studentFeedback: "Average rating of 4.5/5 across all courses taught.",
      achievements: [
        "Developed new course curriculum for AI and Machine Learning",
        "Established research partnership with leading tech company",
        "Presented at two international conferences"
      ],
      recommendations: [
        "Focus on securing more external research funding",
        "Enhance industry collaboration opportunities",
        "Consider developing online learning materials"
      ]
    }
  },
  {
    id: 3,
    year: "2021",
    rating: "Good",
    highlights: "Consistent teaching performance",
    status: "Approved",
    details: {
      teachingPerformance: "Effective teaching methodology with good student engagement.",
      researchOutput: "Published 2 papers and presented at national conference.",
      administrativeDuties: "Regular participation in department meetings and committees.",
      studentFeedback: "Positive feedback on course structure and delivery.",
      achievements: [
        "Updated course materials for modern industry requirements",
        "Mentored 5 undergraduate research projects",
        "Contributed to department's strategic planning"
      ],
      recommendations: [
        "Increase research publication output",
        "Participate in more professional development activities",
        "Expand network with international collaborators"
      ]
    }
  },
];

const Appraisals = () => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);
  const [selectedAppraisal, setSelectedAppraisal] = useState<any>(null);

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
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setSelectedAppraisal(appraisal)}
                      >
                        View Full Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Appraisal Report Dialog */}
        {selectedAppraisal && (
          <AppraisalReport
            appraisal={selectedAppraisal}
            isOpen={!!selectedAppraisal}
            onClose={() => setSelectedAppraisal(null)}
          />
        )}
      </div>
    </FacultyLayout>
  );
};

export default Appraisals;

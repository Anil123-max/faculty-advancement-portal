import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

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

const AppraisalForm = () => {
  const { toast } = useToast();

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
  );
};

export default AppraisalForm;
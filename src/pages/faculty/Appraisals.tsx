import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
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
});

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
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Faculty Appraisal Form</h1>
        <Progress value={progress} className="w-[200px]" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Annual Performance Review</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
    </div>
  );
};

export default Appraisals;
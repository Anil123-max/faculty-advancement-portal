import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Users, Target } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Research Tracking",
      description: "Monitor and manage academic research projects efficiently"
    },
    {
      icon: Award,
      title: "Career Development",
      description: "Track and plan career progression in academia"
    },
    {
      icon: Users,
      title: "Faculty Management",
      description: "Comprehensive tools for faculty administration"
    },
    {
      icon: Target,
      title: "Performance Metrics",
      description: "Measure and analyze academic achievements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-background flex flex-col">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Faculty Career System</h1>
          <div className="space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/login">
              <Button variant="secondary" size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">About Our Platform</h1>
            <p className="text-lg text-muted-foreground">
              Empowering faculty members to achieve their full potential through comprehensive career management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6 flex items-start space-x-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
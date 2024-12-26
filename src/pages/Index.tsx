import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const defaultCredentials = {
    faculty: { email: "faculty@example.com", password: "faculty123" },
    admin: { email: "admin@example.com", password: "admin123" }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === defaultCredentials.admin.email && password === defaultCredentials.admin.password) {
      localStorage.setItem("userRole", "admin");
      toast({
        title: "Admin Login Successful",
        description: "Welcome back, Admin!",
      });
      navigate("/admin/dashboard");
    } else if (email === defaultCredentials.faculty.email && password === defaultCredentials.faculty.password) {
      localStorage.setItem("userRole", "faculty");
      toast({
        title: "Faculty Login Successful",
        description: "Welcome back, Faculty member!",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDefaultLogin = (role: 'faculty' | 'admin') => {
    setEmail(defaultCredentials[role].email);
    setPassword(defaultCredentials[role].password);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-background">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Faculty Career System</h1>
          <div className="space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="glass-card">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                Welcome Back
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                >
                  Sign In
                </Button>
                <div className="flex gap-2 mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleDefaultLogin('faculty')}
                  >
                    Login as Faculty
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleDefaultLogin('admin')}
                  >
                    Login as Admin
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;

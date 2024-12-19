import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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
      toast({
        title: "Admin Login Successful",
        description: "Welcome back, Admin!",
      });
      navigate("/dashboard");
    } else if (email === defaultCredentials.faculty.email && password === defaultCredentials.faculty.password) {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent to-background p-4">
      <div className="w-full max-w-md animate-fade-up">
        <Card className="glass-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Faculty Career Portal
            </CardTitle>
            <p className="text-sm text-muted-foreground text-center">
              Enter your credentials to access your account
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full btn-primary"
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
              <div className="text-sm text-center text-muted-foreground mt-4">
                <p>Default Faculty: faculty@example.com / faculty123</p>
                <p>Default Admin: admin@example.com / admin123</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
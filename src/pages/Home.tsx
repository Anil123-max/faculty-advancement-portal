import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-background">
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
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Welcome to Faculty Career System
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering academic excellence through comprehensive career management and advancement
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="animate-fade-up">Get Started</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Research from "./pages/faculty/Research";
import Career from "./pages/faculty/Career";
import Appraisals from "./pages/faculty/Appraisals";
import Profile from "./pages/faculty/Profile";

const queryClient = new QueryClient();

// Simple auth check - in a real app, this would be more sophisticated
const isFaculty = () => {
  const user = localStorage.getItem("user");
  return user === "faculty@example.com";
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isFaculty()) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/research"
            element={
              <ProtectedRoute>
                <Research />
              </ProtectedRoute>
            }
          />
          <Route
            path="/career"
            element={
              <ProtectedRoute>
                <Career />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appraisals"
            element={
              <ProtectedRoute>
                <Appraisals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
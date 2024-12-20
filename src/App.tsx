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
import FacultyProfile from "./pages/faculty/Profile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Reports from "./pages/admin/Reports";
import ResearchTracking from "./pages/admin/ResearchTracking";
import FacultyManagement from "./pages/admin/FacultyManagement";
import EventLogs from "./pages/admin/EventLogs";
import SystemLogs from "./pages/admin/SystemLogs";
import AdminProfile from "./pages/admin/Profile";

const queryClient = new QueryClient();

const getUserRole = () => {
  return localStorage.getItem("userRole");
};

const ProtectedRoute = ({ children, allowedRole }: { children: React.ReactNode; allowedRole: string }) => {
  const userRole = getUserRole();
  
  if (!userRole || userRole !== allowedRole) {
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
          
          {/* Faculty Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRole="faculty">
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/research"
            element={
              <ProtectedRoute allowedRole="faculty">
                <Research />
              </ProtectedRoute>
            }
          />
          <Route
            path="/career"
            element={
              <ProtectedRoute allowedRole="faculty">
                <Career />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appraisals"
            element={
              <ProtectedRoute allowedRole="faculty">
                <Appraisals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRole="faculty">
                <FacultyProfile />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <ProtectedRoute allowedRole="admin">
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/research-tracking"
            element={
              <ProtectedRoute allowedRole="admin">
                <ResearchTracking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/faculty-management"
            element={
              <ProtectedRoute allowedRole="admin">
                <FacultyManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/event-logs"
            element={
              <ProtectedRoute allowedRole="admin">
                <EventLogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/system-logs"
            element={
              <ProtectedRoute allowedRole="admin">
                <SystemLogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
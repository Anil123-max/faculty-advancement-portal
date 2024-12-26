import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FacultyLayout from "@/components/FacultyLayout";
import DashboardMetrics from "@/components/faculty/DashboardMetrics";
import DashboardCharts from "@/components/faculty/DashboardCharts";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <FacultyLayout>
      <div className="space-y-6">
        <DashboardMetrics navigate={navigate} />
        <DashboardCharts />
      </div>
    </FacultyLayout>
  );
};

export default Dashboard;
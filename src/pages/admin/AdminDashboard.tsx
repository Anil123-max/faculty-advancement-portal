import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminMetrics } from "@/components/admin/AdminMetrics";
import { AdminNotifications } from "@/components/admin/AdminNotifications";
import { AdminCharts } from "@/components/admin/AdminCharts";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        
        <AdminMetrics />
        <AdminNotifications />
        <AdminCharts />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
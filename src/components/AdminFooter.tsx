import { Link } from "react-router-dom";
import { Settings, Shield, Database, Mail, Phone, MapPin } from "lucide-react";

const AdminFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Admin Portal</h3>
            <p className="text-gray-300 text-sm">
              Comprehensive administrative tools for faculty management and system oversight
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/admin/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/admin/faculty-management" className="hover:text-white transition-colors">Faculty Management</Link></li>
              <li><Link to="/admin/reports" className="hover:text-white transition-colors">Reports</Link></li>
              <li><Link to="/admin/system-logs" className="hover:text-white transition-colors">System Logs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">System Tools</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                System Settings
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Security Controls
              </li>
              <li className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                Database Management
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Admin Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                admin.support@university.edu
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1 (555) 345-6789
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Admin Support Center
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Admin Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
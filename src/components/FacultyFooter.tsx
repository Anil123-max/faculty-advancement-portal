import { Link } from "react-router-dom";
import { Book, GraduationCap, FileText, Mail, Phone, MapPin } from "lucide-react";

const FacultyFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Faculty Portal</h3>
            <p className="text-gray-300 text-sm">
              Supporting faculty excellence in research, teaching, and professional development
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/research" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Career</Link></li>
              <li><Link to="/appraisals" className="hover:text-white transition-colors">Appraisals</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                Research Portal
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Teaching Resources
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Faculty Handbook
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                faculty.support@university.edu
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1 (555) 234-5678
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Faculty Support Office
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Faculty Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FacultyFooter;
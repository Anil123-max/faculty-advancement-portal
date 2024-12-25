import { FC, ReactNode } from "react";
import FacultyNav from "./FacultyNav";
import Footer from "./Footer";

interface FacultyLayoutProps {
  children: ReactNode;
}

const FacultyLayout: FC<FacultyLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-accent flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Faculty Portal</h1>
            <FacultyNav />
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default FacultyLayout;
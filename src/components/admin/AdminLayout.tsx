import { ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import Footer from "../Footer";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-accent flex flex-col">
      <AdminHeader />
      <div className="flex flex-grow">
        <AdminSidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
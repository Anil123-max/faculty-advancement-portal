import { ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import AdminFooter from "../AdminFooter";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-accent flex flex-col">
      <AdminHeader />
      <div className="flex flex-grow">
        <AdminSidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
      <AdminFooter />
    </div>
  );
};
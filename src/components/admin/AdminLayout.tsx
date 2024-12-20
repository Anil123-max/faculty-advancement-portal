import { ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-accent">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

import Sidebar from "@/components/admin/Sidebar";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-root d-flex">
      <Sidebar />
      <div className="admin-content flex-grow-1 p-4">
        {children}
      </div>
    </div>
  );
}


import Sidebar from "@/components/admin/Sidebar";
import { AuthProvider } from "@/context/AuthContext";
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
    <AuthProvider>
    <div className="admin-root d-flex">
      <Sidebar />
      <div className="admin-content flex-grow-1 p-4">
        {children}
      </div>
    </div>
    </AuthProvider>
  );
}

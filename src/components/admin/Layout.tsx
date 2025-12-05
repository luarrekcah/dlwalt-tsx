import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="admin-root d-flex">
      <Sidebar />
      <div className="admin-content flex-grow-1 p-4">{children}</div>
    </div>
  );
};

export default Layout;

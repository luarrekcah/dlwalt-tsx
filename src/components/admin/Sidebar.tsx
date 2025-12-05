import Link from "next/link";

const Sidebar = () => {
  return (
    <nav
      className="sidebar bg-light p-3"
      style={{ width: 240, minHeight: "100vh" }}
    >
      <h4>D | Walt Engenharia</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" href="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin/usuarios">
            Usuários
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin/posts">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

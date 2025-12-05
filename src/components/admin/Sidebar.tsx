"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const items = [
    { label: "Dashboard", href: "/admin/dashboard", icon: "fas fa-chart-line" },
    { label: "Usuários", href: "/admin/usuarios", icon: "fas fa-users" },
    { label: "Posts", href: "/admin/posts", icon: "fas fa-file-alt" },
  ];

  console.log(pathname);

  return (
    <nav
      className="sidebar bg-light p-3"
      style={{ width: 240, minHeight: "100vh" }}
    >
      <h4>D | Walt Engenharia</h4>
      <ul className="nav flex-column p-3">
        {items.map(({ label, href, icon }) => {
          const active = pathname.startsWith(href);
          return (
            <li className="nav-item mb-1" key={href}>
              <Link
                href={href}
                className={`nav-link d-flex align-items-center ${
                  active ? "bg-primary text-white" : null
                }`}
                style={{ borderRadius: 20 }}
              >
                <i className={`${icon} mr-2`}></i>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;

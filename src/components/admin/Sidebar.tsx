"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const items = [
    {
      group: "Geral",
      items: [
        {
          label: "Dashboard",
          href: "/admin/dashboard",
          icon: "fas fa-chart-line",
        },
        { label: "Posts", href: "/admin/posts", icon: "fas fa-file-alt" },
        {
          label: "Projetos",
          href: "/admin/projetos",
          icon: "fas fa-solar-panel",
          notFinished: true,
        },
        {
          label: "Vagas",
          href: "/admin/vagas",
          icon: "fas fa-briefcase",
          notFinished: true,
        },
      ],
    },
    {
      group: "Gerência",
      items: [
        {
          label: "Analytics",
          href: "/admin/analytics",
          icon: "fas fa-chart-bar",
          notFinished: true,
        },
        { label: "Usuários", href: "/admin/usuarios", icon: "fas fa-users" },
        {
          label: "Ajustes",
          href: "/admin/ajustes",
          icon: "fas fa-cogs",
          notFinished: true,
        },
      ],
    },
    {
      group: "Avançado",
      items: [
        {
          label: "Header",
          href: "/admin/header",
          icon: "fas fa-cog",
          notFinished: true,
        },
      ],
    },
  ];

  console.log(pathname);

  return (
    <nav
      className="sidebar bg-light p-3"
      style={{ width: 240, minHeight: "100vh" }}
    >
      <h4>D | Walt Engenharia</h4>
      <ul className="nav flex-column p-0">
        {items.map((group, index) => (
          <div key={group.group}>
            {/* título do grupo */}
            <small className="text-muted px-3 text-uppercase font-weight-bold">
              {group.group}
            </small>

            {group.items.map(({ label, href, icon, notFinished }) => {
              const active = pathname.startsWith(href);

              return (
                <li className="nav-item mb-1" key={href}>
                 <Link
  href={notFinished ? "/admin/idealizacao" : href}
  className={`nav-link d-flex align-items-center ${
    active ? "bg-primary text-white" : "text-dark"
  }`}
  style={{ borderRadius: 20 }}
>
  <span className="icon-wrapper d-flex justify-content-center align-items-center me-2">
    <i className={icon}></i>
  </span>

  <span className="flex-grow-1">{label}</span>

  {notFinished && (
    <span className="badge bg-warning text-dark ms-2">
      IDEALIZAÇÃO
    </span>
  )}
</Link>

                </li>
              );
            })}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;

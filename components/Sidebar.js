"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Students", href: "/students" },
  { label: "Courses", href: "/courses" },
  { label: "Assignments", href: "/assignments" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const renderLinks = (mobile = false) => (
    <nav className={mobile ? "flex min-w-max gap-2" : "space-y-2"}>
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${mobile ? "rounded-full px-4 py-2" : "block rounded-lg px-4 py-3"} text-sm font-medium ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-slate-200 bg-white p-5 md:block">
      <h1 className="mb-8 text-xl font-bold text-slate-900">CampusConnect</h1>
      {renderLinks()}
    </aside>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="overflow-x-auto border-b border-slate-200 bg-white px-4 py-3 md:hidden">
      <nav className="flex min-w-max gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              isActive(link.href)
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
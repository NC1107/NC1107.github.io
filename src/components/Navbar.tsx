"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-jet">
      <ul className="flex justify-end">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`block px-4 py-5 text-[17px] text-bone hover:bg-olive transition-colors ${
                pathname === link.href ? "bg-drab-dark-brown" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

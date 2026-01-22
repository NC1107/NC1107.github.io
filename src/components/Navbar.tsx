"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/notes", label: "Notes" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-jet shadow-md">
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-bone py-4 hover:text-olive transition-colors"
        >
          NC
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-5 text-[17px] text-bone hover:text-olive transition-colors relative ${
                  isActive(link.href) ? "text-olive" : ""
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-olive" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-bone hover:text-olive transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-jet border-t border-davys-gray/30">
          <ul className="py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3 text-[17px] text-bone hover:bg-olive/20 transition-colors ${
                    isActive(link.href) ? "text-olive border-l-2 border-olive" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

// Add your interactive web projects here
const webProjects = [
  {
    label: "Echo Messenger",
    href: "https://echo-messenger.us",
  },
  {
    label: "Sad Cats",
    href: "https://sad-cats.org",
  },
  {
    label: "Housing Affordability",
    href: "https://nc1107.github.io/housing-affordability",
  },
];

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/notes", label: "Notes" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setProjectsOpen(false), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-jet/90 backdrop-blur-md border-b border-davys-gray/30 shadow-md">
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
          {/* Projects with dropdown */}
          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/projects"
              className={`flex items-center gap-1 px-4 py-5 text-[17px] text-bone hover:text-olive transition-colors relative ${
                isActive("/projects") ? "text-olive" : ""
              }`}
            >
              Projects
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {isActive("/projects") && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-olive" />
              )}
            </Link>

            {/* Dropdown */}
            {projectsOpen && (
              <div className="absolute top-full left-0 min-w-[220px] bg-jet border border-davys-gray/30 rounded-b-lg shadow-lg overflow-hidden">
                <Link
                  href="/projects"
                  className="flex items-center gap-2 px-4 py-3 text-[15px] text-bone hover:bg-olive/20 transition-colors"
                  onClick={() => setProjectsOpen(false)}
                >
                  <svg className="w-4 h-4 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  All Projects
                </Link>

                {webProjects.length > 0 && (
                  <>
                    <div className="border-t border-davys-gray/30 mx-3" />
                    <div className="px-4 pt-2 pb-1">
                      <span className="text-[11px] uppercase tracking-wider text-davys-gray">
                        Interactive
                      </span>
                    </div>
                    {webProjects.map((project) => (
                      <a
                        key={project.href}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2.5 text-[15px] text-bone hover:bg-olive/20 transition-colors"
                        onClick={() => setProjectsOpen(false)}
                      >
                        {project.label}
                        <svg className="w-3.5 h-3.5 text-davys-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </>
                )}
              </div>
            )}
          </li>

          {/* Other nav links */}
          {navLinks.filter(l => l.href !== "/projects").map((link) => (
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
            {/* Projects with expandable sub-items */}
            <li>
              <button
                type="button"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className={`flex items-center justify-between w-full px-6 py-3 text-[17px] text-bone hover:bg-olive/20 transition-colors ${
                  isActive("/projects") ? "text-olive border-l-2 border-olive" : ""
                }`}
              >
                Projects
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileProjectsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileProjectsOpen && (
                <div className="bg-jet/50">
                  <Link
                    href="/projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-10 py-2.5 text-[15px] text-bone hover:bg-olive/20 transition-colors"
                  >
                    <svg className="w-4 h-4 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    All Projects
                  </Link>
                  {webProjects.map((project) => (
                    <a
                      key={project.href}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-10 py-2.5 text-[15px] text-bone hover:bg-olive/20 transition-colors"
                    >
                      {project.label}
                      <svg className="w-3.5 h-3.5 text-davys-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* Other nav links */}
            {navLinks.filter(l => l.href !== "/projects").map((link) => (
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



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

// Smooth scroll helper for hash links
const scrollToHash = (hash: string) => {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Handle hash link clicks
  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hash = href.split("#")[1];
    if (!hash) return;
    e.preventDefault();
    scrollToHash(`#${hash}`);
    setSidebarOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm py-3"
            : "bg-white py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with gradient */}
          <Link href="/" className="flex items-center gap-2.5 group">
           
            <span className="font-display font-bold text-xl tracking-tight text-teal-800">
              Greenping<span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/#pricing"
              onClick={(e) => handleHashClick(e, "/#pricing")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-sm transition-all hover:from-green-700 hover:to-teal-700 shadow-sm hover:shadow-md"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar (slide from left) */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-all duration-300 ease-in-out md:hidden",
          sidebarOpen ? "visible" : "invisible"
        )}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
            sidebarOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar panel */}
        <div
          className={cn(
            "absolute top-0 left-0 bottom-0 w-64 bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 ease-in-out",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setSidebarOpen(false)}
                className="px-4 py-3 text-sm text-center text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                Login
              </Link>
              <Link
                href="/#pricing"
                onClick={(e) => handleHashClick(e, "/#pricing")}
                className="px-4 py-3 text-sm text-center bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-teal-700 transition-colors"
              >
                Get Started Free
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
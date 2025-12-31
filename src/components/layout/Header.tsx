"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md py-4 border-b border-slate-800"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-heading font-bold text-white tracking-wide">
            WAFI <span className="text-amber-500">ENGINEERING</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="secondary" className="font-semibold" asChild>
            <Link href="/contact">Book Your Seat</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/artists", label: "Artists" },
    { href: "/contact", label: "Contact" },
    { href: "/admin", label: "Admin" },
    { href: "/playlists", label: "Playlists" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 backdrop-blur-md bg-black/20">
      <div className="relative flex justify-between items-center">
        {/* Left: Nav Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter font-medium text-sm uppercase tracking-widest text-white no-underline transition-colors duration-200 hover:text-engeloop-cream"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center: Oversized Logo */}
        <div className="absolute left-1/2 top-[-25px] -translate-x-1/2 z-60">
          <Link href="/">
            <Image
              src="/media/engeloop-logo.png"
              alt="Engeloop Logo"
              width={160}
              height={160}
              className="block pointer-events-none"
            />
          </Link>
        </div>

        {/* Right: Submit Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/submit"
            className="px-4 py-2 bg-white text-black rounded-md font-semibold text-sm no-underline transition-all duration-200 hover:bg-gray-200"
          >
            Submit Your Demo
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-transparent border-none text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center gap-8 z-[999] md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-inter font-medium text-xl text-white no-underline transition-colors duration-200 hover:text-engeloop-cream"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;

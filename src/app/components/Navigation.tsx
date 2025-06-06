"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/artists", label: "Artists" },
  { href: "/releases", label: "Releases" },
  { href: "/playlists", label: "Playlistçs" },
  { href: "/contact", label: "Contact" },
]; // Home link is usually implicit with the logo

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
      setTimeout(() => {
        const focusableElements =
          mobileMenuRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          );
        focusableElements?.[0]?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const linkBaseClasses =
    "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-engeloop-orange focus:ring-offset-2 focus:ring-offset-engeloop-charcoal";
  const activeLinkPillClasses = "bg-black/40 text-white"; // Subtle background for active link
  const inactiveLinkPillClasses =
    "text-gray-300 hover:text-white hover:bg-white/10";

  return (
    <>
      {/* Desktop Navigation Pill */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 md:pt-5">
        <div className="hidden md:inline-flex items-center bg-engeloop-charcoal rounded-full shadow-xl p-1.5 space-x-1.5">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label="Engeloop Records Home"
          >
            <Image
              src="/media/engeloop-logo.png"
              alt="Engeloop Records Logo"
              width={36} // Scaled down logo
              height={36} // Maintain aspect ratio
              priority
              className="transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${linkBaseClasses} ${
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href))
                  ? activeLinkPillClasses
                  : inactiveLinkPillClasses
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Drop a Demo CTA */}
          <Link
            href="/submit"
            className={`${linkBaseClasses} bg-engeloop-orange text-white hover:bg-engeloop-orange/80 shadow-sm`}
          >
            DROP A DEMO
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Toggle (fixed position for mobile) */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-[60] md:hidden">
        <button
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-overlay"
          className="p-2.5 bg-engeloop-charcoal/80 backdrop-blur-sm text-gray-200 hover:text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-engeloop-orange focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 w-full h-screen bg-engeloop-charcoal/95 backdrop-blur-sm flex flex-col justify-center items-center space-y-5 z-[999]"
        >
          {/* Explicit Home link for mobile if not covered by logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-inter font-semibold text-lg uppercase tracking-wider no-underline transition-colors duration-200 py-2
                ${
                  pathname === "/"
                    ? "text-engeloop-orange"
                    : "text-gray-200 hover:text-white"
                }`}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-inter font-semibold text-lg uppercase tracking-wider no-underline transition-colors duration-200 py-2
                ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-engeloop-orange"
                    : "text-gray-200 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/submit"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 px-8 py-3 bg-engeloop-orange text-white rounded-lg font-semibold text-lg uppercase tracking-wider no-underline transition-all duration-200 ease-in-out hover:bg-engeloop-orange/80 shadow-md"
          >
            DROP A DEMO
          </Link>
        </div>
      )}
    </>
  );
};

export default Navigation;

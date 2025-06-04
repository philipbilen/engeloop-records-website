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
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1rem 2rem",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: Nav Links */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "-25px",
            transform: "translateX(-50%)",
            zIndex: 60,
          }}
        >
          <Link href="/">
            <Image
              src="/media/engeloop-logo.png"
              alt="Engeloop Records Logo"
              width={160}
              height={160}
              priority
              sizes="160px"
              style={{
                display: "block",
                pointerEvents: "none",
              }}
            />
          </Link>
        </div>

        {/* Right: Submit + Mobile Menu Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            href="/submit"
            style={{
              padding: "8px 16px",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecoration: "none",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#eee";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
            }}
          >
            Submit Your Demo
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              display: "none", // Show via media query if needed
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.95)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            zIndex: 999,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
              style={{ fontSize: "1.25rem", color: "#fff" }}
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

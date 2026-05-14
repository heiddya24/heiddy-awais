"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/libros", label: "Libros" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/blog", label: "Blog" },
  { href: "/prensa", label: "Prensa" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(250,250,248,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.375rem",
            fontWeight: 600,
            color: "var(--dark)",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          Heiddy <span style={{ color: "var(--rose-gold)" }}>Awais</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "var(--gray)",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--rose-gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--gray)")
              }
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <Link
            href="/en"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--rose-gold)",
              textDecoration: "none",
              border: "1px solid var(--rose-gold)",
              padding: "4px 12px",
              borderRadius: "20px",
              letterSpacing: "0.05em",
            }}
          >
            EN
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--dark)",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--cream)",
            borderTop: "1px solid var(--border)",
            padding: "24px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--dark-soft)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/en"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "16px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--rose-gold)",
              textDecoration: "none",
              border: "1px solid var(--rose-gold)",
              padding: "6px 16px",
              borderRadius: "20px",
            }}
          >
            English Version
          </Link>
        </div>
      )}
    </header>
  );
}

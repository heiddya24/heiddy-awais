"use client";

import Link from "next/link";
import { Globe, Mic, Play } from "lucide-react";

const footerLinks = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/libros", label: "Libros" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/blog", label: "Blog" },
  { href: "/prensa", label: "Prensa" },
  { href: "/contacto", label: "Contacto" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/heiddyawais",
    icon: Globe,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@heiddyawais",
    icon: Play,
    label: "YouTube",
  },
  {
    href: "https://www.linkedin.com/in/heiddyawais",
    icon: Mic,
    label: "LinkedIn",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--dark)",
        color: "var(--gray-light)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--white)",
                marginBottom: "16px",
              }}
            >
              Heiddy <span style={{ color: "var(--rose-gold)" }}>Awais</span>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                maxWidth: "260px",
              }}
            >
              Psicóloga, coach de crecimiento personal y conferencista de
              renombre. Autora de{" "}
              <em style={{ color: "var(--rose-gold-light)" }}>
                Elegirme sin miedo
              </em>
              .
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    color: "var(--gray-light)",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--rose-gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--gray-light)")
                  }
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--rose-gold)",
                marginBottom: "20px",
              }}
            >
              Navegación
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--gray-light)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--white)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gray-light)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--rose-gold)",
                marginBottom: "20px",
              }}
            >
              Contacto
            </div>
            <p style={{ fontSize: "0.875rem", marginBottom: "12px" }}>
              heiddya24@gmail.com
            </p>
            <a
              href="https://wa.me/15859789655"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "var(--rose-gold)",
                color: "var(--white)",
                padding: "10px 20px",
                borderRadius: "6px",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                marginTop: "8px",
              }}
            >
              WhatsApp →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.8125rem" }}>
            © {currentYear} Heiddy Awais. Todos los derechos reservados.
          </p>
          <Link
            href="/en"
            style={{
              fontSize: "0.8125rem",
              color: "var(--rose-gold)",
              textDecoration: "none",
            }}
          >
            English Version →
          </Link>
        </div>
      </div>
    </footer>
  );
}

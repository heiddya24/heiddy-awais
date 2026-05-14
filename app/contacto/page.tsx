import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import ContactoForm from "./ContactoForm";

export const metadata: Metadata = {
  title: "Contacto | Hablemos",
  description:
    "Contáctame para conferencias, coaching individual, workshops o cualquier consulta. Heiddy Awais responde en menos de 24 horas. WhatsApp: +15859789655.",
  alternates: { canonical: "https://heiddyawais.com/contacto" },
  openGraph: {
    title: "Contacto — Heiddy Awais",
    description:
      "¿Lista para trabajar juntas? Escríbeme para conferencias, coaching o cualquier consulta. Respondo en menos de 24 horas.",
    url: "https://heiddyawais.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* BREADCRUMB */}
      <div
        style={{
          background: "var(--white)",
          borderBottom: "1px solid var(--border)",
          padding: "14px 24px",
          paddingTop: "86px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8125rem",
            color: "var(--gray)",
          }}
        >
          <Link href="/" style={{ color: "var(--rose-gold)", textDecoration: "none" }}>
            Inicio
          </Link>
          <span>/</span>
          <span style={{ color: "var(--dark)" }}>Contacto</span>
        </div>
      </div>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #FAFAF8 0%, #F5EDE4 60%, #FAFAF8 100%)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--rose-gold)",
              marginBottom: "16px",
            }}
          >
            Hablemos
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "var(--dark)",
              marginBottom: "20px",
            }}
          >
            Estoy aquí para{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>acompañarte</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "var(--gray)",
              lineHeight: 1.8,
            }}
          >
            Ya sea para una conferencia, coaching, o simplemente para conectar — me encantaría
            escucharte. Respondo en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: "80px 24px", background: "var(--white)" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "64px",
            alignItems: "flex-start",
          }}
          className="ha-contact-grid"
        >
          {/* FORM */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "var(--dark)",
                marginBottom: "32px",
              }}
            >
              Envíame un mensaje
            </h2>
            <ContactoForm />
          </div>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* WhatsApp */}
            <div
              style={{
                background: "var(--dark)",
                borderRadius: "16px",
                padding: "36px 32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--white)",
                  marginBottom: "12px",
                }}
              >
                ¿Prefieres WhatsApp?
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--gray-light)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                Escríbeme directamente y te respondo lo antes posible.
              </p>
              <a
                href="https://wa.me/15859789655?text=Hola%20Heiddy%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "#25D366",
                  color: "var(--white)",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                Escribir por WhatsApp <ArrowRight size={16} />
              </a>
            </div>

            {/* Contact info */}
            <div
              style={{
                background: "var(--cream)",
                borderRadius: "16px",
                padding: "36px 32px",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--dark)",
                  marginBottom: "24px",
                }}
              >
                Datos de contacto
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "heiddya24@gmail.com",
                    href: "mailto:heiddya24@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    value: "+1 (585) 978-9655",
                    href: "https://wa.me/15859789655",
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "var(--rose-gold-pale)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={16} style={{ color: "var(--rose-gold)" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.8125rem",
                          color: "var(--gray)",
                          marginBottom: "4px",
                        }}
                      >
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.9375rem",
                          fontWeight: 500,
                          color: "var(--rose-gold)",
                          textDecoration: "none",
                        }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "var(--rose-gold-pale)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={16} style={{ color: "var(--rose-gold)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        color: "var(--gray)",
                        marginBottom: "4px",
                      }}
                    >
                      Ubicación
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--dark)",
                      }}
                    >
                      Estados Unidos
                      <br />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.8125rem",
                          fontWeight: 400,
                          color: "var(--gray)",
                        }}
                      >
                        Disponible globalmente
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div
              style={{
                background: "var(--rose-gold-pale)",
                borderRadius: "16px",
                padding: "28px 32px",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--rose-gold-dark)",
                  marginBottom: "6px",
                }}
              >
                &lt; 24 horas
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--gray)",
                }}
              >
                Tiempo de respuesta promedio
              </div>
            </div>

            {/* Social links */}
            <div
              style={{
                background: "var(--white)",
                borderRadius: "16px",
                padding: "28px 32px",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--dark)",
                  marginBottom: "16px",
                }}
              >
                Sígueme en redes
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { label: "Instagram", href: "https://www.instagram.com/heiddyawais" },
                  { label: "TikTok", href: "https://www.tiktok.com/@heiddyawais" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/heiddyawais" },
                  { label: "YouTube", href: "https://www.youtube.com/@heiddyawais" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--gray)",
                      textDecoration: "none",
                      padding: "12px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {social.label}
                    <ArrowRight size={14} style={{ color: "var(--rose-gold)" }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .ha-contact-grid { grid-template-columns: 1fr !important; }
          .ha-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

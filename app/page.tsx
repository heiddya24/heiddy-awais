import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mic, Globe, Heart, Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Heiddy Awais | Coach de Crecimiento Personal & Psicóloga",
  description:
    "Psicóloga, coach de crecimiento personal y conferencista de renombre internacional. Autora de 'Elegirme sin miedo'. Participante del Récord Guinness. Más de 50 países recorridos.",
};

const stats = [
  { value: "50+", label: "Países visitados", icon: Globe },
  { value: "1", label: "Libro publicado", icon: BookOpen },
  { value: "Récord", label: "Guinness", icon: Award },
  { value: "100+", label: "Conferencias", icon: Mic },
];

const pillars = [
  {
    icon: Heart,
    title: "Mentalidad Femenina",
    description:
      "Acompañamos a mujeres a reconectar con su poder interno, liberarse del miedo y diseñar una vida extraordinaria desde el amor propio.",
  },
  {
    icon: Mic,
    title: "Conferencias de Impacto",
    description:
      "Keynotes y workshops que transforman audiencias corporativas y femeninas con herramientas de psicología y crecimiento personal.",
  },
  {
    icon: BookOpen,
    title: "Conocimiento que Libera",
    description:
      "A través de sus libros y programas, Heiddy comparte décadas de aprendizaje en psicología, viajes y desarrollo humano.",
  },
];

const testimonials = [
  {
    quote:
      "Heiddy tiene una habilidad única para llegar al corazón de las personas. Su conferencia fue la más poderosa de nuestro evento anual.",
    name: "Directora de RRHH",
    company: "Fortune 500",
    stars: 5,
  },
  {
    quote:
      "Gracias a su coaching, finalmente me atreví a elegirme a mí misma. Cambiaste mi vida.",
    name: "Cliente Transformada",
    company: "Nueva York",
    stars: 5,
  },
  {
    quote:
      "Una psicóloga con alma de viajera y corazón de mentora. Absolutamente excepcional.",
    name: "Organizadora de Evento",
    company: "Miami",
    stars: 5,
  },
];

const pressLogos = [
  "Mentoreada por Spencer Hoffmann",
  "Récord Guinness",
  "Conferencista Internacional",
  "Psicóloga Certificada",
  "50+ Países",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué servicios ofrece Heiddy Awais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heiddy Awais ofrece coaching de crecimiento personal, conferencias y keynotes corporativas, talleres de mentalidad femenina, y sesiones individuales de psicología positiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo contratar a Heiddy Awais para una conferencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactar a Heiddy directamente a través del formulario de contacto en heiddyawais.com, por WhatsApp al +15859789655, o por email a heiddya24@gmail.com.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde puedo comprar el libro 'Elegirme sin miedo' de Heiddy Awais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El libro 'Elegirme sin miedo' de Heiddy Awais está disponible en Amazon y en las principales librerías digitales.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #FAFAF8 0%, #F5EDE4 50%, #FAFAF8 100%)",
          paddingTop: "72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,149,106,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            width: "100%",
          }}
          className="ha-hero-grid"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(196,149,106,0.1)",
                border: "1px solid rgba(196,149,106,0.3)",
                padding: "6px 16px",
                borderRadius: "40px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--rose-gold)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--rose-gold-dark)",
                  letterSpacing: "0.05em",
                }}
              >
                Psicóloga · Coach · Conferencista
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--dark)",
                marginBottom: "24px",
              }}
            >
              Elegirte{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                sin miedo
              </span>{" "}
              es el primer paso.
            </h1>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                color: "var(--gray)",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              Soy <strong style={{ color: "var(--dark)" }}>Heiddy Awais</strong>, psicóloga y coach de
              crecimiento personal. He recorrido más de 50 países, participé en un Récord Guinness, y
              mi misión es ayudarte a transformar tu vida desde adentro.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/contacto"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--rose-gold)",
                  color: "var(--white)",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Trabaja conmigo <ArrowRight size={18} />
              </Link>
              <Link
                href="/libros"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "var(--dark)",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                Mi libro
              </Link>
            </div>
          </div>

          {/* Image area */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "380px",
                borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                border: "3px solid rgba(196,149,106,0.2)",
                overflow: "hidden",
                maxWidth: "100%",
                boxShadow: "0 24px 64px rgba(196,149,106,0.2)",
              }}
            >
              <img
                src="/images/heiddy-amigable.jpg"
                alt="Heiddy Awais — Coach de Crecimiento Personal"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "0px",
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "16px 20px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--dark)",
                }}
              >
                50+
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--gray)",
                  marginTop: "2px",
                }}
              >
                Países recorridos
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0px",
                background: "var(--rose-gold)",
                borderRadius: "12px",
                padding: "16px 20px",
                boxShadow: "0 8px 32px rgba(196,149,106,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--white)",
                }}
              >
                Récord
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.8)",
                  marginTop: "2px",
                }}
              >
                Guinness
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "var(--dark)", padding: "64px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center", padding: "24px" }}>
              <stat.icon size={28} style={{ color: "var(--rose-gold)", marginBottom: "12px" }} />
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--gray-light)",
                  marginTop: "8px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "96px 24px", background: "var(--white)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="ha-hero-grid"
        >
          <div
            style={{
              background: "var(--rose-gold-pale)",
              borderRadius: "24px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "20px",
                border: "2px solid rgba(196,149,106,0.3)",
                borderRadius: "16px",
              }}
            />
            <div style={{ textAlign: "center", padding: "40px" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  color: "var(--rose-gold-dark)",
                  lineHeight: 1.6,
                }}
              >
                "La vida más extraordinaria comienza cuando decides elegirte sin miedo."
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--gray)",
                  marginTop: "20px",
                  fontWeight: 500,
                }}
              >
                — Heiddy Awais
              </div>
            </div>
          </div>

          <div>
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
              Sobre mí
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              Psicóloga con alma de{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                viajera
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--gray)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Soy Heiddy Awais, psicóloga, coach de crecimiento personal y conferencista internacional.
              Mi pasión por entender la mente humana me llevó a recorrer más de 50 países, aprendiendo
              de culturas, personas y experiencias que hoy comparto con mis clientes y audiencias.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--gray)",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Mentoreada por Spencer Hoffmann, participante de un Récord Guinness, y autora de{" "}
              <em style={{ color: "var(--rose-gold-dark)" }}>Elegirme sin miedo</em> — mi invitación
              a que te atrevas a ser tú misma, completamente y sin disculpas.
            </p>
            <Link
              href="/sobre-mi"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--rose-gold)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid var(--rose-gold)",
                paddingBottom: "2px",
              }}
            >
              Conoce mi historia <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ padding: "96px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
              Mi filosofía
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Tres pilares que{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                transforman vidas
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  borderRadius: "16px",
                  padding: "40px 32px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    background: "var(--rose-gold-pale)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <pillar.icon size={24} style={{ color: "var(--rose-gold)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.375rem",
                    fontWeight: 600,
                    color: "var(--dark)",
                    marginBottom: "16px",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--gray)",
                    lineHeight: 1.7,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section style={{ padding: "96px 24px", background: "var(--dark)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="ha-hero-grid"
        >
          <div
            style={{
              width: "240px",
              height: "340px",
              background: "linear-gradient(135deg, var(--rose-gold) 0%, var(--rose-gold-dark) 100%)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "20px 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ textAlign: "center", padding: "32px 20px" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.375rem",
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1.3,
                  marginBottom: "20px",
                }}
              >
                Elegirme sin miedo
              </div>
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: "rgba(255,255,255,0.4)",
                  margin: "0 auto 20px",
                }}
              />
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Heiddy Awais
              </div>
            </div>
          </div>

          <div>
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
              Mi libro
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--white)",
                marginBottom: "24px",
                lineHeight: 1.2,
                fontStyle: "italic",
              }}
            >
              Elegirme sin miedo
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--gray-light)",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              Una invitación poderosa a reconectarte con quien verdaderamente eres, a soltarte de lo
              que no te sirve, y a atreverte a elegirte — sin culpa, sin excusas, sin miedo.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--gray-light)",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}
            >
              Con herramientas de psicología positiva, experiencias de viaje y reflexiones profundas,
              este libro es el acompañante que necesitabas para comenzar a vivir en tus propios términos.
            </p>
            <Link
              href="/libros/elegirme-sin-miedo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--rose-gold)",
                color: "var(--white)",
                padding: "14px 28px",
                borderRadius: "8px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Conocer el libro <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "96px 24px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
              Testimonios
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Lo que dicen quienes{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                me conocen
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "var(--cream)",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={16} fill="var(--rose-gold)" stroke="none" />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.0625rem",
                    fontStyle: "italic",
                    color: "var(--dark-soft)",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--dark)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--gray)",
                      marginTop: "2px",
                    }}
                  >
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section
        style={{
          padding: "48px 24px",
          background: "var(--rose-gold-pale)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gray)",
              marginBottom: "32px",
            }}
          >
            Reconocida por
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "32px 48px",
            }}
          >
            {pressLogos.map((logo) => (
              <div
                key={logo}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--rose-gold-dark)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--rose-gold)" }}>✦</span>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "96px 24px",
          background: "linear-gradient(135deg, var(--cream) 0%, var(--rose-gold-pale) 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            ¿Lista para{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
              transformar tu vida
            </span>
            ?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.0625rem",
              color: "var(--gray)",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            Conferencias corporativas, coaching individual, o simplemente una conversación.
            Estoy aquí para acompañarte.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--rose-gold)",
                color: "var(--white)",
                padding: "16px 36px",
                borderRadius: "8px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Contáctame <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/15859789655"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "var(--dark)",
                padding: "16px 36px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ha-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}

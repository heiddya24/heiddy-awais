import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mic, Globe, Heart, Award, Users, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Conferencias & Keynotes | Conferencista Internacional",
  description:
    "Contrata a Heiddy Awais para tu próximo evento: keynotes transformadores sobre mentalidad femenina, crecimiento personal, liderazgo femenino y el Récord Guinness. Disponible para eventos corporativos e internacionales.",
  alternates: { canonical: "https://heiddyawais.com/conferencias" },
  openGraph: {
    title: "Conferencias de Heiddy Awais | Keynotes & Workshops",
    description:
      "Heiddy Awais es conferencista internacional de alto impacto. Keynotes y workshops en mentalidad femenina, liderazgo y crecimiento personal.",
    url: "https://heiddyawais.com/conferencias",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿En qué idiomas da conferencias Heiddy Awais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heiddy Awais da conferencias en español e inglés, y está disponible para audiencias internacionales en América Latina, Estados Unidos, España y el resto del mundo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué formatos de presentación ofrece Heiddy Awais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heiddy ofrece keynotes magistrales (60-90 minutos), workshops interactivos (3-8 horas), paneles de expertos y retiros de liderazgo femenino.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los temas principales de las conferencias de Heiddy Awais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los temas principales incluyen: Mentalidad Femenina, Crecimiento Personal sin Miedo, Liderazgo Femenino, El Récord Guinness como metáfora de vida, y Lecciones de 50+ países.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo contratar a Heiddy Awais para una conferencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactar a Heiddy directamente por WhatsApp al +15859789655, por email a heiddya24@gmail.com, o a través del formulario de contacto en heiddyawais.com/contacto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Heiddy Awais viaja internacionalmente para conferencias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Heiddy Awais está disponible para conferencias presenciales en cualquier parte del mundo, además de formatos virtuales e híbridos.",
      },
    },
  ],
};

const topics = [
  {
    icon: Heart,
    title: "Mentalidad Femenina",
    subtitle: "El poder que ya vive en ti",
    description:
      "Una exploración profunda de cómo la mente femenina puede ser nuestra mayor fortaleza o nuestro principal obstáculo. Con herramientas de psicología positiva y neurolingüística, esta conferencia ayuda a las mujeres a reprogramar los patrones que las frenan.",
    duration: "60-90 min",
    audience: "Mujeres, Corporativo mixto",
  },
  {
    icon: Award,
    title: "Elegirme sin miedo",
    subtitle: "Tu primer acto de valentía",
    description:
      "Basada en el libro del mismo nombre, esta keynote es un viaje poderoso hacia el amor propio radical. Heiddy comparte su historia personal, herramientas prácticas y la ciencia detrás de por qué elegirse a una misma es la decisión más transformadora que puedes tomar.",
    duration: "60-90 min",
    audience: "Mujeres, Eventos de bienestar",
  },
  {
    icon: Mic,
    title: "Liderazgo Femenino",
    subtitle: "Liderar desde quien eres",
    description:
      "Las mujeres líderes de hoy enfrentan desafíos únicos. Esta conferencia explora cómo construir un liderazgo auténtico, fuerte y compasivo — sin copiar modelos masculinos y sin sacrificar tu identidad en el proceso.",
    duration: "60-90 min",
    audience: "Ejecutivas, Emprendedoras, Corporativo",
  },
  {
    icon: Award,
    title: "El Récord Guinness",
    subtitle: "La mentalidad de los límites imposibles",
    description:
      "Una historia extraordinaria de superación, trabajo en equipo y mentalidad de excelencia. Heiddy comparte las lecciones que aprendió al participar en la obtención de un Récord Guinness y cómo aplicarlas a tu vida personal y profesional.",
    duration: "45-60 min",
    audience: "Corporativo, Eventos de motivación",
  },
  {
    icon: Globe,
    title: "Lecciones de 50+ Países",
    subtitle: "El mundo como aula de vida",
    description:
      "A través de sus viajes a más de 50 países, Heiddy ha recopilado lecciones universales sobre resiliencia, adaptabilidad, diversidad e innovación. Esta conferencia única combina narrativa de viaje con herramientas de desarrollo humano.",
    duration: "60-90 min",
    audience: "Corporativo, Líderes globales",
  },
  {
    icon: Users,
    title: "Crecimiento Personal",
    subtitle: "De dónde estás a donde quieres ir",
    description:
      "Una hoja de ruta clara y científica para el desarrollo personal. Heiddy combina psicología, coaching y su experiencia internacional para entregar herramientas concretas que crean cambios reales y sostenibles.",
    duration: "60-90 min",
    audience: "Audiencia general, Corporativo",
  },
];

const formats = [
  {
    icon: Mic,
    title: "Keynote Magistral",
    duration: "60 – 90 minutos",
    description:
      "Una presentación de alto impacto diseñada para inspirar, educar y transformar a grandes audiencias. Perfecta para congresos, cierres de evento y ceremonias de gala.",
    includes: [
      "Presentación dinámica con apoyo visual",
      "Sesión de preguntas y respuestas",
      "Fotografía y video (según acuerdo)",
      "Material de apoyo para asistentes",
    ],
  },
  {
    icon: Users,
    title: "Workshop Interactivo",
    duration: "3 – 8 horas",
    description:
      "Una experiencia inmersiva donde las participantes no solo escuchan, sino que practican, reflexionan y crean. Ideal para equipos y grupos que buscan un cambio real.",
    includes: [
      "Dinámicas de grupo y ejercicios prácticos",
      "Materiales de trabajo personalizados",
      "Plan de acción individual",
      "Seguimiento post-workshop",
    ],
  },
  {
    icon: Star,
    title: "Panel de Expertos",
    duration: "45 – 60 minutos",
    description:
      "Heiddy participa como panelista experta, aportando perspectivas únicas sobre mentalidad femenina, psicología del éxito y liderazgo. Moderada o sin moderación.",
    includes: [
      "Preparación previa con organizadores",
      "Coordinación con otros panelistas",
      "Disponibilidad para entrevistas de prensa",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Heiddy fue la conferencista más aplaudida de nuestro congreso anual. Las participantes salieron completamente transformadas.",
    name: "María José Rodríguez",
    company: "Directora de Evento Corporativo",
    stars: 5,
  },
  {
    quote:
      "Contratamos a Heiddy para nuestro retiro de liderazgo femenino y fue absolutamente excepcional. Volveremos a invitarla.",
    name: "Andrea Santos",
    company: "VP de RRHH, Empresa Fortune 500",
    stars: 5,
  },
  {
    quote:
      "La combinación de su formación psicológica con sus experiencias de viaje crea algo único. Nuestra audiencia la adoró.",
    name: "Patricia Vega",
    company: "Organizadora, Congreso Internacional",
    stars: 5,
  },
];

export default function ConferenciasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
          <span style={{ color: "var(--dark)" }}>Conferencias</span>
        </div>
      </div>

      {/* HERO */}
      <section
        style={{
          background: "var(--dark)",
          padding: "96px 24px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,149,106,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "780px", margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(196,149,106,0.15)",
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
                color: "var(--rose-gold-light)",
                letterSpacing: "0.05em",
              }}
            >
              Conferencista Internacional
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--white)",
              marginBottom: "24px",
            }}
          >
            Keynotes que{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
              transforman audiencias
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "var(--gray-light)",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            Heiddy Awais lleva a los escenarios una combinación única de psicología, experiencias
            de vida y una presencia magnética que deja huella en cada persona de la audiencia.
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
              Solicitar cotización <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/15859789655?text=Hola%20Heiddy%2C%20quiero%20cotizar%20una%20conferencia"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "var(--white)",
                padding: "16px 36px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* GUINNESS PHOTO BANNER */}
      <section style={{ position: "relative", maxHeight: "480px", overflow: "hidden" }}>
        <img
          src="/images/heiddy-guinness.jpg"
          alt="Heiddy Awais en la gala oficial del Récord Guinness World Records"
          style={{ width: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block", maxHeight: "480px" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(26,26,26,0.85) 0%, transparent 100%)",
            padding: "40px 48px 32px",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.125rem",
              fontStyle: "italic",
              color: "var(--white)",
              opacity: 0.95,
            }}
          >
            Participante oficial del Récord Guinness World Records
          </span>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          background: "var(--rose-gold-pale)",
          padding: "40px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {[
            { value: "100+", label: "Conferencias dadas" },
            { value: "50+", label: "Países de experiencia" },
            { value: "5", label: "Temas especializados" },
            { value: "2", label: "Idiomas" },
          ].map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--rose-gold-dark)",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--gray)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KEYNOTE TOPICS */}
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
              Temas keynote
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Conferencias disponibles
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {topics.map((topic, i) => (
              <article
                key={i}
                style={{
                  background: "var(--cream)",
                  borderRadius: "16px",
                  padding: "40px 36px",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
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
                  }}
                >
                  <topic.icon size={24} style={{ color: "var(--rose-gold)" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.375rem",
                      fontWeight: 600,
                      color: "var(--dark)",
                      marginBottom: "4px",
                    }}
                  >
                    {topic.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--rose-gold)",
                      fontWeight: 500,
                      fontStyle: "italic",
                      marginBottom: "14px",
                    }}
                  >
                    {topic.subtitle}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--gray)",
                      lineHeight: 1.7,
                    }}
                  >
                    {topic.description}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginTop: "auto",
                    paddingTop: "12px",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--rose-gold-dark)",
                      background: "var(--rose-gold-pale)",
                      padding: "4px 12px",
                      borderRadius: "40px",
                    }}
                  >
                    {topic.duration}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--gray)",
                      background: "var(--white)",
                      padding: "4px 12px",
                      borderRadius: "40px",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {topic.audience}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
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
              Formatos
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              ¿Qué formato se{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                adapta a tu evento?
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {formats.map((format, i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  borderRadius: "16px",
                  padding: "40px 36px",
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
                  <format.icon size={24} style={{ color: "var(--rose-gold)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.375rem",
                    fontWeight: 600,
                    color: "var(--dark)",
                    marginBottom: "6px",
                  }}
                >
                  {format.title}
                </h3>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--rose-gold)",
                    fontWeight: 500,
                    marginBottom: "16px",
                  }}
                >
                  {format.duration}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--gray)",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                  }}
                >
                  {format.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {format.includes.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <CheckCircle
                        size={16}
                        style={{ color: "var(--rose-gold)", flexShrink: 0, marginTop: "2px" }}
                      />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.875rem",
                          color: "var(--gray)",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 24px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Lo que dicen los{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>organizadores</span>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
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
                    marginBottom: "20px",
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

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--rose-gold-pale)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Preguntas frecuentes
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { q: "¿En qué idiomas habla Heiddy?", a: "Español e inglés, para audiencias internacionales." },
              {
                q: "¿Viaja internacionalmente?",
                a: "Sí. Heiddy está disponible para eventos en cualquier parte del mundo, además de formatos virtuales e híbridos.",
              },
              {
                q: "¿Cuánto tiempo de anticipación necesito para contratar una conferencia?",
                a: "Recomendamos contactar con al menos 4-6 semanas de anticipación para fechas regulares y 3+ meses para eventos internacionales.",
              },
              {
                q: "¿Pueden personalizarse los temas?",
                a: "Absolutamente. Heiddy trabaja con cada cliente para adaptar el contenido, los ejemplos y las herramientas al contexto específico de tu audiencia.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 28px",
                  background: "var(--white)",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--dark)",
                    marginBottom: "10px",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--gray)",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "96px 24px",
          background: "linear-gradient(135deg, var(--dark) 0%, var(--dark-soft) 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Mic size={40} style={{ color: "var(--rose-gold)", marginBottom: "24px" }} />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 600,
              color: "var(--white)",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            ¿Listo para llevar a{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>Heiddy</span> a tu
            evento?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--gray-light)",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            Cuéntanos sobre tu evento y te preparamos una propuesta personalizada. Respondemos
            en menos de 24 horas.
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
              Solicitar cotización <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/15859789655?text=Hola%20Heiddy%2C%20quiero%20contratarte%20para%20una%20conferencia"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "var(--white)",
                padding: "16px 36px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

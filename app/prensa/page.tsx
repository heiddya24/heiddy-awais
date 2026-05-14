import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Mail, Mic, Globe, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Prensa & Medios | Kit de Prensa",
  description:
    "Sala de prensa de Heiddy Awais: kit de prensa, apariciones en medios, logros destacados y contacto para periodistas y medios de comunicación.",
  alternates: { canonical: "https://heiddyawais.com/prensa" },
  openGraph: {
    title: "Prensa & Medios — Heiddy Awais",
    description:
      "Kit de prensa, biografía oficial y contacto de medios para Heiddy Awais: psicóloga, coach y conferencista internacional.",
    url: "https://heiddyawais.com/prensa",
  },
};

// NOTE: Replace these with actual press articles as they become available
const pressArticles = [
  {
    publication: "Revista Mujer Empoderada",
    title: "Heiddy Awais: La psicóloga que recorrió 50 países para entender el alma femenina",
    date: "2024",
    category: "Perfil",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
  {
    publication: "Forbes América Latina",
    title: "Elegirme sin miedo: el libro que está cambiando la mentalidad femenina",
    date: "2024",
    category: "Libros",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
  {
    publication: "CNN en Español",
    title: "Récord Guinness y 50 países: la historia de la coach que todo lo puede",
    date: "2024",
    category: "Entrevista",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
  {
    publication: "Glamour México",
    title: "Las 10 mujeres que están transformando el desarrollo personal en Latinoamérica",
    date: "2024",
    category: "Lista",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
  {
    publication: "El Nuevo Herald",
    title: "Heiddy Awais: La voz del crecimiento personal desde Miami",
    date: "2024",
    category: "Perfil",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
  {
    publication: "Telemundo",
    title: "La psicóloga venezolana-americana que está conquistando los escenarios internacionales",
    date: "2024",
    category: "Televisión",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
  {
    publication: "Podcast Mujeres que Lideran",
    title: "Episodio 87: Elegirme sin miedo — Conversación con Heiddy Awais",
    date: "2024",
    category: "Podcast",
    note: "Reemplazar con enlace real al episodio cuando esté disponible",
    url: "#",
  },
  {
    publication: "Univision Noticias",
    title: "Récord Guinness, 50 países y un libro: la fórmula de Heiddy Awais para el éxito",
    date: "2024",
    category: "Televisión",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
  {
    publication: "Líderes Mexicanos",
    title: "Coaching con propósito: el método de Heiddy Awais que transforma organizaciones",
    date: "2024",
    category: "Negocios",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
  {
    publication: "Infobae",
    title: "El fenómeno Heiddy Awais: cómo una psicóloga se convirtió en referente del empoderamiento femenino",
    date: "2024",
    category: "Perfil",
    note: "Reemplazar con enlace real al artículo cuando esté disponible",
    url: "#",
  },
];

const achievements = [
  { icon: BookOpen, text: "Autora de 'Elegirme sin miedo'" },
  { icon: Award, text: "Participante del Récord Guinness" },
  { icon: Globe, text: "Más de 50 países visitados" },
  { icon: Mic, text: "Más de 100 conferencias internacionales" },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  Perfil: { bg: "var(--rose-gold-pale)", color: "var(--rose-gold-dark)" },
  Libros: { bg: "#EDF4FF", color: "#2B5CB8" },
  Entrevista: { bg: "#F0FAF0", color: "#2D7A3C" },
  Lista: { bg: "#FFF7ED", color: "#B45309" },
  Televisión: { bg: "#FDF4FF", color: "#7C3AED" },
  Podcast: { bg: "#FFF0F0", color: "#B91C1C" },
  Negocios: { bg: "#F0F9FF", color: "#0369A1" },
};

export default function PrensaPage() {
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
          <span style={{ color: "var(--dark)" }}>Prensa</span>
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
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
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
            Sala de prensa
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
            Prensa &{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>Medios</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "var(--gray)",
              lineHeight: 1.8,
            }}
          >
            Recursos para periodistas, bloggers y medios de comunicación. Todo lo que necesitas
            para cubrir la historia de Heiddy Awais.
          </p>
        </div>
      </section>

      {/* MEDIA KIT */}
      <section style={{ padding: "80px 24px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--dark)",
              borderRadius: "24px",
              padding: "64px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "48px",
              alignItems: "center",
            }}
            className="ha-kit-grid"
          >
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
                Recursos de prensa
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 600,
                  color: "var(--white)",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                Kit de Prensa Oficial
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "var(--gray-light)",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                Descarga el kit completo con biografía oficial, fotos de alta resolución,
                logotipos, datos biográficos y pautas de marca.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="/press-kit/heiddy-awais-press-kit.zip"
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
                  <Download size={18} /> Descargar Kit Completo
                </a>
                <a
                  href="mailto:heiddya24@gmail.com?subject=Solicitud%20de%20Prensa"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "transparent",
                    color: "var(--white)",
                    padding: "14px 28px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  <Mail size={18} /> Contacto de Prensa
                </a>
              </div>
            </div>
            <div
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "16px",
                background: "rgba(196,149,106,0.15)",
                border: "2px solid rgba(196,149,106,0.3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                flexShrink: 0,
              }}
              className="ha-kit-icon"
            >
              <Download size={32} style={{ color: "var(--rose-gold)" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--gray-light)",
                  textAlign: "center",
                }}
              >
                Press Kit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BIO OFICIAL */}
      <section style={{ padding: "80px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
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
              Para uso en prensa
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 600,
                color: "var(--dark)",
                marginBottom: "32px",
              }}
            >
              Biografía Oficial
            </h2>
          </div>

          <div
            style={{
              background: "var(--white)",
              borderRadius: "16px",
              padding: "48px",
              border: "1px solid var(--border)",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--gray)",
                marginBottom: "20px",
              }}
            >
              Biografía corta (150 palabras)
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--dark-soft)",
                lineHeight: 1.8,
              }}
            >
              <strong>Heiddy Awais</strong> es Psicóloga, Coach de Crecimiento Personal y Conferencista
              Internacional. Mentoreada por el reconocido líder Spencer Hoffmann, ha dedicado su carrera
              a acompañar a mujeres y organizaciones en procesos de transformación profunda y sostenida.
              Ha recorrido más de 50 países, participado en la obtención de un Récord Guinness y
              publicado el libro <em>Elegirme sin miedo</em>. Con una combinación única de ciencia
              psicológica, narrativa de viaje y presencia magnética en el escenario, Heiddy se ha
              posicionado como una de las voces más poderosas del desarrollo personal femenino en el
              mundo hispano. Actualmente reside en Estados Unidos y trabaja con clientes y audiencias
              en todo el mundo.
            </p>
          </div>

          <div
            style={{
              background: "var(--white)",
              borderRadius: "16px",
              padding: "48px",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--gray)",
                marginBottom: "20px",
              }}
            >
              Datos clave para prensa
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Nombre completo", value: "Heiddy Awais" },
                {
                  label: "Título profesional",
                  value: "Coach de Crecimiento Personal & Psicóloga",
                },
                { label: "País de residencia", value: "Estados Unidos" },
                { label: "Libro", value: "Elegirme sin miedo (2024)" },
                { label: "Logros destacados", value: "Récord Guinness, 50+ países, 100+ conferencias" },
                { label: "Mentoría", value: "Spencer Hoffmann" },
                { label: "Idiomas", value: "Español, Inglés" },
                { label: "Email de prensa", value: "heiddya24@gmail.com" },
                { label: "WhatsApp", value: "+1 (585) 978-9655" },
                { label: "Sitio web", value: "heiddyawais.com" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: "16px",
                    paddingBottom: "16px",
                    borderBottom: i < 9 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--gray)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--dark)",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADABLE ASSETS */}
      <section style={{ padding: "80px 24px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
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
              Assets
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Materiales descargables
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Foto oficial (Alta resolución)",
                desc: "Retrato profesional para uso editorial",
                file: "/press-kit/heiddy-awais-photo-hires.jpg",
              },
              {
                title: "Foto en conferencia",
                desc: "Imagen en escenario para medios",
                file: "/press-kit/heiddy-awais-conferencia.jpg",
              },
              {
                title: "Portada del libro",
                desc: "Imagen oficial de 'Elegirme sin miedo'",
                file: "/press-kit/elegirme-sin-miedo-cover.jpg",
              },
              {
                title: "Logotipo (PNG transparente)",
                desc: "Logo oficial en alta resolución",
                file: "/press-kit/heiddy-awais-logo.png",
              },
              {
                title: "Biografía completa (PDF)",
                desc: "Bio extendida en formato PDF",
                file: "/press-kit/heiddy-awais-bio.pdf",
              },
              {
                title: "Kit de prensa completo (ZIP)",
                desc: "Todos los recursos en un archivo",
                file: "/press-kit/heiddy-awais-press-kit.zip",
              },
            ].map((asset, i) => (
              <a
                key={i}
                href={asset.file}
                download
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "28px 24px",
                  background: "var(--cream)",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "var(--rose-gold-pale)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Download size={20} style={{ color: "var(--rose-gold)" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--dark)",
                      marginBottom: "4px",
                    }}
                  >
                    {asset.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--gray)",
                    }}
                  >
                    {asset.desc}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--rose-gold)",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "auto",
                  }}
                >
                  Descargar <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS ARTICLES */}
      <section style={{ padding: "80px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
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
              Apariciones en medios
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Heiddy en la prensa
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "var(--gray)",
                marginTop: "12px",
                fontStyle: "italic",
              }}
            >
              Los artículos a continuación son placeholders. Reemplazar con los artículos y
              apariciones reales de prensa cuando estén disponibles.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {pressArticles.map((article, i) => {
              const catStyle = categoryColors[article.category] || {
                bg: "var(--rose-gold-pale)",
                color: "var(--rose-gold-dark)",
              };
              return (
                <article
                  key={i}
                  style={{
                    background: "var(--white)",
                    borderRadius: "12px",
                    padding: "28px 32px",
                    border: "1px solid var(--border)",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "24px",
                    alignItems: "center",
                  }}
                  className="ha-press-item"
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginBottom: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "var(--rose-gold-dark)",
                        }}
                      >
                        {article.publication}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: catStyle.color,
                          background: catStyle.bg,
                          padding: "2px 10px",
                          borderRadius: "40px",
                          fontWeight: 500,
                        }}
                      >
                        {article.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.8125rem",
                          color: "var(--gray-light)",
                        }}
                      >
                        {article.date}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.0625rem",
                        fontWeight: 600,
                        color: "var(--dark)",
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <a
                    href={article.url}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--rose-gold)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Leer <ArrowRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOGROS DESTACADOS */}
      <section style={{ background: "var(--dark)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                fontWeight: 600,
                color: "var(--white)",
              }}
            >
              Logros destacados
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {achievements.map((a, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(196,149,106,0.2)",
                  borderRadius: "12px",
                  padding: "32px 28px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(196,149,106,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <a.icon size={20} style={{ color: "var(--rose-gold)" }} />
                </div>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--white)",
                    lineHeight: 1.5,
                  }}
                >
                  {a.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FOR PRESS */}
      <section
        style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, var(--cream) 0%, var(--rose-gold-pale) 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <Mail size={40} style={{ color: "var(--rose-gold)", marginBottom: "20px" }} />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Contacto para{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>medios</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--gray)",
              lineHeight: 1.7,
              marginBottom: "12px",
            }}
          >
            Para entrevistas, solicitudes de aparición en medios, artículos de prensa o cualquier
            consulta relacionada con comunicación:
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "var(--rose-gold-dark)",
              marginBottom: "32px",
            }}
          >
            heiddya24@gmail.com
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:heiddya24@gmail.com?subject=Solicitud%20de%20Prensa"
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
              <Mail size={18} /> Enviar email de prensa
            </a>
            <a
              href="https://wa.me/15859789655?text=Hola%20Heiddy%2C%20soy%20de%20prensa%20y%20quisiera%20contactarte"
              target="_blank"
              rel="noopener noreferrer"
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
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ha-kit-grid { grid-template-columns: 1fr !important; }
          .ha-kit-icon { display: none !important; }
          .ha-press-item { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

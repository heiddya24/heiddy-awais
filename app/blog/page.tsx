import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Heiddy Awais — Crecimiento Personal, Psicología y Viajes",
  description:
    "Artículos de psicología, crecimiento personal, mentalidad femenina y viajes por Heiddy Awais. Herramientas prácticas para transformar tu vida desde adentro.",
  alternates: {
    canonical: "https://heiddyawais.com/blog",
  },
};

const blogPosts = [
  {
    slug: "como-elegirte-sin-miedo",
    title: "Cómo elegirte sin miedo: la guía definitiva",
    excerpt:
      "Descubre los 5 pasos para comenzar a priorizarte sin culpa y vivir una vida alineada con tus valores más profundos.",
    date: "2026-05-10",
    category: "Crecimiento Personal",
  },
  {
    slug: "mentalidad-femenina-poder",
    title: "Mentalidad femenina: el poder que siempre tuviste",
    excerpt:
      "La mente femenina tiene una capacidad extraordinaria de adaptación, empatía y liderazgo. Aprende a activar ese poder.",
    date: "2026-05-05",
    category: "Mentalidad",
  },
  {
    slug: "lecciones-50-paises",
    title: "50 países, 50 lecciones de vida",
    excerpt:
      "Después de visitar más de 50 países, estas son las lecciones más transformadoras que el mundo me enseñó.",
    date: "2026-04-28",
    category: "Viajes",
  },
  {
    slug: "psicologia-amor-propio",
    title: "Psicología del amor propio: qué dice la ciencia",
    excerpt:
      "La ciencia detrás del amor propio: cómo desarrollarlo, mantenerlo y usarlo como base para una vida extraordinaria.",
    date: "2026-04-20",
    category: "Psicología",
  },
  {
    slug: "record-guinness-historia",
    title: "Cómo participé en un Récord Guinness",
    excerpt:
      "La historia detrás de mi participación en el Récord Guinness y lo que esa experiencia me enseñó sobre los límites humanos.",
    date: "2026-04-15",
    category: "Experiencias",
  },
  {
    slug: "coaching-vs-psicologia",
    title: "Coaching vs Psicología: ¿cuál necesitas?",
    excerpt:
      "Una psicóloga y coach te explica las diferencias reales entre ambas disciplinas y cuándo usar cada una.",
    date: "2026-04-08",
    category: "Psicología",
  },
  {
    slug: "habitos-mujer-exitosa",
    title: "7 hábitos de una mujer mentalmente fuerte",
    excerpt:
      "Estas no son teorías. Son los hábitos que transformaron mi vida y la de cientos de mujeres que han trabajado conmigo.",
    date: "2026-04-01",
    category: "Hábitos",
  },
  {
    slug: "miedo-al-exito-mujeres",
    title: "El miedo al éxito en las mujeres: por qué ocurre",
    excerpt:
      "¿Por qué tantas mujeres brillantes se autosabotean? La psicología detrás del miedo al éxito y cómo superarlo.",
    date: "2026-03-25",
    category: "Mentalidad",
  },
  {
    slug: "conferencista-internacional-camino",
    title: "Mi camino para convertirme en conferencista internacional",
    excerpt:
      "Cómo pasé de ser psicóloga local a conferencista en múltiples países. Sin atajos, solo trabajo y estrategia.",
    date: "2026-03-18",
    category: "Experiencias",
  },
  {
    slug: "viaje-sola-mujer-consejos",
    title: "Viajar sola siendo mujer: mi guía completa",
    excerpt:
      "Después de 50 países, comparto mis mejores consejos de seguridad, mentalidad y libertad para mujeres viajeras.",
    date: "2026-03-10",
    category: "Viajes",
  },
  {
    slug: "liderar-desde-la-autenticidad",
    title: "Liderazgo femenino: liderar desde la autenticidad",
    excerpt:
      "El liderazgo más poderoso no viene de imitar a otros, sino de liderar siendo completamente tú misma.",
    date: "2026-03-03",
    category: "Liderazgo",
  },
  {
    slug: "elegirme-sin-miedo-libro-historia",
    title: "La historia detrás de 'Elegirme sin miedo'",
    excerpt:
      "Por qué escribí este libro, qué significa para mí, y por qué creo que puede cambiar la vida de millones de mujeres.",
    date: "2026-02-25",
    category: "Libro",
  },
  {
    slug: "inteligencia-emocional-mujeres",
    title: "Inteligencia emocional: la habilidad del siglo XXI",
    excerpt:
      "Por qué la inteligencia emocional es la competencia más valiosa del siglo XXI y cómo desarrollarla.",
    date: "2026-02-18",
    category: "Psicología",
  },
  {
    slug: "mentor-spencer-hoffmann-lecciones",
    title: "Lo que aprendí de mi mentor Spencer Hoffmann",
    excerpt:
      "Ser mentoreada por uno de los mejores del mundo cambia tu perspectiva. Estas son las lecciones que transformaron mi carrera.",
    date: "2026-02-10",
    category: "Mentoría",
  },
  {
    slug: "proposito-de-vida-encontrar",
    title: "Cómo encontrar tu propósito de vida en 5 pasos",
    excerpt:
      "El propósito no se inventa, se descubre. Una guía práctica basada en psicología y crecimiento personal.",
    date: "2026-02-03",
    category: "Crecimiento Personal",
  },
];

const categories = [
  "Todos",
  "Crecimiento Personal",
  "Mentalidad",
  "Psicología",
  "Viajes",
  "Experiencias",
  "Hábitos",
  "Liderazgo",
  "Libro",
  "Mentoría",
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Blog de Heiddy Awais",
  url: "https://heiddyawais.com/blog",
  numberOfItems: blogPosts.length,
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://heiddyawais.com/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: "Heiddy Awais",
      },
      keywords: post.category,
    },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />

      {/* PAGE HEADER */}
      <section
        style={{
          background: "linear-gradient(135deg, #FAFAF8 0%, #F5EDE4 60%, #FAFAF8 100%)",
          paddingTop: "120px",
          paddingBottom: "64px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
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
            Reflexiones & Herramientas
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--dark)",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Blog de{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
              Crecimiento Personal
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "var(--gray)",
              lineHeight: 1.75,
            }}
          >
            Artículos basados en psicología, experiencias de vida y más de 50 países recorridos.
            Aquí encontrarás herramientas reales para transformarte desde adentro.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER PILLS */}
      <section
        style={{
          background: "var(--white)",
          borderBottom: "1px solid var(--border)",
          padding: "20px 24px",
          position: "sticky",
          top: "72px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map((cat, i) => (
            <span
              key={cat}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 500,
                padding: "6px 16px",
                borderRadius: "40px",
                border: i === 0 ? "1px solid var(--rose-gold)" : "1px solid var(--border)",
                background: i === 0 ? "var(--rose-gold-pale)" : "transparent",
                color: i === 0 ? "var(--rose-gold-dark)" : "var(--gray)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section style={{ padding: "64px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "32px",
            }}
            className="ha-blog-grid"
          >
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                style={{
                  background: "var(--white)",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                }}
                className="ha-blog-card"
              >
                {/* Card top accent */}
                <div
                  style={{
                    height: "4px",
                    background: "linear-gradient(90deg, var(--rose-gold) 0%, var(--rose-gold-light) 100%)",
                  }}
                />

                <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Category badge */}
                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--rose-gold-dark)",
                        border: "1px solid rgba(196,149,106,0.4)",
                        background: "var(--rose-gold-pale)",
                        padding: "4px 12px",
                        borderRadius: "40px",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--dark)",
                      lineHeight: 1.3,
                      marginBottom: "12px",
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "var(--gray)",
                      lineHeight: 1.7,
                      marginBottom: "20px",
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <time
                      dateTime={post.date}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        color: "var(--gray-light)",
                      }}
                    >
                      {formatDate(post.date)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--rose-gold)",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 24px",
          background: "var(--white)",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "16px",
            }}
          >
            ¿Quieres trabajar{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
              directamente conmigo
            </span>
            ?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--gray)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Los artículos son el comienzo. El verdadero cambio ocurre cuando decidimos trabajarlo juntas.
          </p>
          <Link
            href="/contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--rose-gold)",
              color: "var(--white)",
              padding: "14px 32px",
              borderRadius: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Contáctame →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ha-blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .ha-blog-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}

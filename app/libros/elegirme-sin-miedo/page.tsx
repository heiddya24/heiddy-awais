import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, BookOpen, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Elegirme sin miedo | Libro de Heiddy Awais",
  description:
    "'Elegirme sin miedo' de Heiddy Awais: una guía transformadora de psicología positiva y amor propio para mujeres que quieren vivir en sus propios términos. Disponible en Amazon.",
  alternates: { canonical: "https://heiddyawais.com/libros/elegirme-sin-miedo" },
  openGraph: {
    title: "Elegirme sin miedo — Heiddy Awais",
    description:
      "El libro que te invita a soltar el miedo y elegirte completamente. Psicología, viajes y transformación interior en cada página.",
    url: "https://heiddyawais.com/libros/elegirme-sin-miedo",
    type: "book",
  },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Elegirme sin miedo",
  author: {
    "@type": "Person",
    name: "Heiddy Awais",
    url: "https://heiddyawais.com",
  },
  url: "https://heiddyawais.com/libros/elegirme-sin-miedo",
  image: "https://heiddyawais.com/images/elegirme-sin-miedo-cover.jpg",
  description:
    "Una invitación poderosa a reconectarte con quien verdaderamente eres, liberarte del miedo y atreverte a elegirte sin culpa ni excusas. Con herramientas de psicología positiva y narrativa de viaje.",
  inLanguage: "es",
  genre: ["Self-help", "Psychology", "Personal Development"],
  publisher: {
    "@type": "Organization",
    name: "Heiddy Awais",
  },
  potentialAction: {
    "@type": "ReadAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://a.co/d/08wC0hc7",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://heiddyawais.com" },
    { "@type": "ListItem", position: 2, name: "Libros", item: "https://heiddyawais.com/libros" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Elegirme sin miedo",
      item: "https://heiddyawais.com/libros/elegirme-sin-miedo",
    },
  ],
};

const chapters = [
  {
    number: "01",
    title: "El primer acto de valentía",
    description:
      "Descubrir que elegirte a ti misma no es egoísmo — es el acto de amor más profundo que existe.",
  },
  {
    number: "02",
    title: "El mapa del miedo",
    description:
      "Entender de dónde viene el miedo, cómo lo hemos alimentado y por qué ya no necesitamos hacerlo.",
  },
  {
    number: "03",
    title: "La psicología de la elección",
    description:
      "Herramientas científicas de psicología positiva para reprogramar los patrones que te frenan.",
  },
  {
    number: "04",
    title: "Lecciones desde los 50 países",
    description:
      "Lo que el mundo enseña sobre la resiliencia, la libertad y el poder de reinventarse.",
  },
  {
    number: "05",
    title: "Romper el molde",
    description:
      "Cómo disolver las expectativas externas y las voces internas que te impiden ser quien ya eres.",
  },
  {
    number: "06",
    title: "Dentro del Récord Guinness World Records",
    description:
      "Lo que significa ser seleccionada entre 333 personas para un evento histórico: lecciones de límites, colectividad y reinvención aplicadas a tu vida.",
  },
  {
    number: "07",
    title: "Diseña tu vida extraordinaria",
    description:
      "Un plan de acción concreto para construir la vida que mereces, paso a paso, sin miedo.",
  },
];

const testimonials = [
  {
    quote:
      "Leí este libro en dos días sin poder parar. Heiddy tiene el don de hablarle directamente a tu alma sin filtros.",
    name: "Alejandra M.",
    location: "Bogotá, Colombia",
    stars: 5,
  },
  {
    quote:
      "El capítulo sobre el mapa del miedo cambió completamente mi perspectiva. Lo releí tres veces.",
    name: "Valentina R.",
    location: "Miami, EE.UU.",
    stars: 5,
  },
  {
    quote:
      "Por fin un libro de crecimiento personal que no se siente forzado. Es honesto, poderoso y transformador.",
    name: "Daniela F.",
    location: "Buenos Aires, Argentina",
    stars: 5,
  },
  {
    quote:
      "Regalé 10 copias a mis amigas. Este libro debería ser lectura obligatoria para toda mujer.",
    name: "Carolina P.",
    location: "Madrid, España",
    stars: 5,
  },
];

const whatYouWillLearn = [
  "Identificar y disolver los miedos que frenan tu crecimiento",
  "Reconectar con tu verdadera identidad y propósito",
  "Aplicar herramientas de psicología positiva en tu vida diaria",
  "Liberarte de las expectativas externas que te limitan",
  "Desarrollar una mentalidad de excelencia y abundancia",
  "Diseñar un plan de vida auténtico y extraordinario",
  "Elegirte a ti misma en cada decisión, grande o pequeña",
];

export default function ElegirseSinMiedoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "var(--rose-gold)", textDecoration: "none" }}>
            Inicio
          </Link>
          <span>/</span>
          <Link href="/libros" style={{ color: "var(--rose-gold)", textDecoration: "none" }}>
            Libros
          </Link>
          <span>/</span>
          <span style={{ color: "var(--dark)" }}>Elegirme sin miedo</span>
        </div>
      </div>

      {/* HERO */}
      <section
        style={{
          background: "var(--dark)",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,149,106,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="ha-book-hero"
        >
          {/* Book Cover */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/elegirme-sin-miedo-cover.jpg"
              alt="Portada del libro Elegirme sin miedo de Heiddy Awais"
              style={{
                width: "260px",
                borderRadius: "10px",
                boxShadow: "24px 24px 64px rgba(0,0,0,0.6), -4px -4px 24px rgba(196,149,106,0.2)",
                flexShrink: 0,
                display: "block",
              }}
            />
          </div>

          {/* Info */}
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
              Libro
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--white)",
                marginBottom: "12px",
                lineHeight: 1.15,
              }}
            >
              Elegirme sin miedo
            </h1>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--rose-gold-light)",
                marginBottom: "24px",
                fontWeight: 400,
              }}
            >
              por Heiddy Awais
            </div>

            <div style={{ display: "flex", gap: "4px", marginBottom: "28px", alignItems: "center" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} fill="var(--rose-gold)" stroke="none" />
              ))}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--gray-light)",
                  marginLeft: "8px",
                }}
              >
                5.0 — Altamente recomendado
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.0625rem",
                color: "var(--gray-light)",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              Una invitación poderosa a reconectarte con quien verdaderamente eres, a soltarte
              de lo que no te sirve, y a atreverte a elegirte — sin culpa, sin excusas, sin miedo.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.0625rem",
                color: "var(--gray-light)",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}
            >
              Con herramientas de psicología positiva, experiencias de más de 50 países y reflexiones
              profundas, este libro es el acompañante que necesitabas para comenzar a vivir en tus
              propios términos.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="https://a.co/d/08wC0hc7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--rose-gold)",
                  color: "var(--white)",
                  padding: "16px 32px",
                  borderRadius: "8px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Comprar en Amazon <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/15859789655?text=Hola%20Heiddy%2C%20quiero%20comprar%20tu%20libro%20Elegirme%20sin%20miedo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "var(--white)",
                  padding: "16px 32px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section style={{ padding: "80px 24px", background: "var(--white)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
              Lo que descubrirás
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Lo que vas a{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>aprender</span>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "16px",
            }}
          >
            {whatYouWillLearn.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  padding: "20px 24px",
                  background: "var(--cream)",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                }}
              >
                <CheckCircle
                  size={20}
                  style={{ color: "var(--rose-gold)", flexShrink: 0, marginTop: "1px" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--dark-soft)",
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS PREVIEW */}
      <section style={{ padding: "80px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
              Contenido
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Vista previa de{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>capítulos</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {chapters.map((chapter, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "28px",
                  alignItems: "flex-start",
                  padding: "28px 32px",
                  background: "var(--white)",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--rose-gold-light)",
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: "40px",
                  }}
                >
                  {chapter.number}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "var(--dark)",
                      marginBottom: "8px",
                    }}
                  >
                    {chapter.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--gray)",
                      lineHeight: 1.6,
                    }}
                  >
                    {chapter.description}
                  </p>
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
              Opiniones
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Lo que dicen las{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>lectoras</span>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR BIO */}
      <section
        style={{
          padding: "80px 24px",
          background: "var(--rose-gold-pale)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="ha-author-grid"
        >
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "4px solid var(--white)",
              boxShadow: "0 8px 32px rgba(196,149,106,0.3)",
            }}
          >
            <img
              src="/images/heiddy-profesional.jpg"
              alt="Heiddy Awais"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
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
                marginBottom: "12px",
              }}
            >
              Sobre la autora
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "var(--dark)",
                marginBottom: "16px",
              }}
            >
              Heiddy Awais
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
              Psicóloga, Coach de Crecimiento Personal y Conferencista Internacional. Mentoreada por
              Spencer Hoffmann, participante del Récord Guinness y viajera de más de 50 países.
              Heiddy escribe desde la experiencia, la ciencia y el corazón.
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
              Conoce su historia <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BUY CTA */}
      <section
        style={{
          padding: "80px 24px",
          background: "var(--dark)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <BookOpen size={40} style={{ color: "var(--rose-gold)", marginBottom: "20px" }} />
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
            ¿Lista para dar el{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>primer paso</span>?
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
            Este libro espera por ti. No lo postergues más — el momento es ahora.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://a.co/d/08wC0hc7"
              target="_blank"
              rel="noopener noreferrer"
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
              Comprar en Amazon <ArrowRight size={18} />
            </a>
            <Link
              href="/contacto"
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
              Consultar a Heiddy
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ha-book-hero { grid-template-columns: 1fr !important; gap: 48px !important; }
          .ha-author-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  );
}

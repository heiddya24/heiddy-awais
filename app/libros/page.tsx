import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Libros | Elegirme sin miedo",
  description:
    "Descubre 'Elegirme sin miedo', el libro de Heiddy Awais: un viaje profundo hacia el amor propio, la valentía y la vida que mereces. Disponible en Amazon.",
  alternates: { canonical: "https://heiddyawais.com/libros" },
  openGraph: {
    title: "Libros de Heiddy Awais | Elegirme sin miedo",
    description:
      "Conoce el libro 'Elegirme sin miedo' de Heiddy Awais. Una guía transformadora para mujeres que quieren elegirse a sí mismas sin culpa ni miedo.",
    url: "https://heiddyawais.com/libros",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿De qué trata el libro 'Elegirme sin miedo' de Heiddy Awais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una guía transformadora que combina psicología positiva, experiencias de viaje y herramientas prácticas para ayudar a las mujeres a reconectar con su poder interno, liberarse del miedo y atreverse a elegirse a sí mismas completamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde puedo comprar 'Elegirme sin miedo'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El libro 'Elegirme sin miedo' de Heiddy Awais está disponible en Amazon en formato físico y digital (Kindle), así como en otras plataformas de libros digitales.",
      },
    },
    {
      "@type": "Question",
      name: "¿El libro está disponible en inglés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Actualmente el libro 'Elegirme sin miedo' está disponible en español. Heiddy Awais está trabajando en futuras ediciones y traducciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para quién está escrito este libro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Está escrito principalmente para mujeres que sienten que han perdido el contacto consigo mismas, que están atrapadas en el miedo, o que desean dar el paso hacia una vida más auténtica, libre y extraordinaria.",
      },
    },
  ],
};

const bookReviews = [
  {
    quote: "Este libro me acompañó en uno de los momentos más importantes de mi vida. Gracias, Heiddy.",
    name: "Lectora en Miami",
    stars: 5,
  },
  {
    quote: "Cada página es una conversación profunda con tu propia alma. Obligatorio para toda mujer.",
    name: "Lectora en Colombia",
    stars: 5,
  },
  {
    quote: "La claridad con la que Heiddy escribe es excepcional. Lo leí en dos días sin poder parar.",
    name: "Lectora en España",
    stars: 5,
  },
];

export default function LibrosPage() {
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
          <span style={{ color: "var(--dark)" }}>Libros</span>
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
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
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
            Publicaciones
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
            Libros que{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
              transforman vidas
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "var(--gray)",
              lineHeight: 1.8,
            }}
          >
            Cada libro es una invitación a un viaje interior. Palabras escritas desde la experiencia,
            la psicología y el corazón — para que encuentres tu propio camino.
          </p>
        </div>
      </section>

      {/* BOOK CARD */}
      <section style={{ padding: "80px 24px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--cream)",
              borderRadius: "24px",
              border: "1px solid var(--border)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "0",
            }}
            className="ha-book-grid"
          >
            {/* Book Cover */}
            <div
              style={{
                padding: "64px 48px",
                background: "var(--dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/elegirme-sin-miedo-cover.jpg"
                alt="Portada del libro Elegirme sin miedo de Heiddy Awais"
                style={{
                  width: "220px",
                  borderRadius: "8px",
                  boxShadow: "16px 16px 48px rgba(0,0,0,0.5)",
                  display: "block",
                }}
              />
            </div>

            {/* Book Info */}
            <div style={{ padding: "64px 56px" }} className="ha-book-info">
              <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="var(--rose-gold)" stroke="none" />
                ))}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--gray)",
                    marginLeft: "8px",
                    lineHeight: "16px",
                  }}
                >
                  Altamente recomendado
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "var(--dark)",
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}
              >
                Elegirme sin miedo
              </h2>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--rose-gold)",
                  marginBottom: "24px",
                  fontWeight: 500,
                }}
              >
                por Heiddy Awais
              </div>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "var(--gray)",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                }}
              >
                Una invitación poderosa a reconectarte con quien verdaderamente eres. Un libro que
                nació de décadas de psicología, experiencias en más de 50 países y la profunda
                convicción de que toda mujer merece una vida extraordinaria.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "var(--gray)",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                }}
              >
                Con herramientas prácticas, reflexiones profundas y una narrativa que toca el
                corazón, <em>Elegirme sin miedo</em> te acompañará en el proceso más importante
                de tu vida: el de elegirte a ti misma.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "36px",
                }}
              >
                {["Psicología Positiva", "Amor Propio", "Crecimiento Personal", "Mentalidad Femenina"].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        color: "var(--rose-gold-dark)",
                        background: "var(--rose-gold-pale)",
                        padding: "4px 14px",
                        borderRadius: "40px",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
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
                  Ver detalles <ArrowRight size={18} />
                </Link>
                <a
                  href="https://a.co/d/08wC0hc7"
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
                  Comprar en Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: "var(--rose-gold-pale)" }}>
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
              Lectoras dicen
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
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {bookReviews.map((review, i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                  {Array.from({ length: review.stars }).map((_, j) => (
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
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--dark)",
                  }}
                >
                  {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--white)" }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              {
                q: "¿De qué trata 'Elegirme sin miedo'?",
                a: "Es una guía transformadora que combina psicología positiva, experiencias de viaje y herramientas prácticas para que las mujeres reconecten con su poder interno y se atrevan a elegirse a sí mismas.",
              },
              {
                q: "¿Dónde puedo comprarlo?",
                a: "Está disponible en Amazon en formato físico y digital (Kindle). También en otras plataformas de libros digitales.",
              },
              {
                q: "¿Está disponible en inglés?",
                a: "Actualmente está disponible en español. Heiddy está trabajando en futuras ediciones.",
              },
              {
                q: "¿Para quién es este libro?",
                a: "Para mujeres que desean dar el paso hacia una vida más auténtica, libre y extraordinaria — sin culpa, sin excusas y sin miedo.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 32px",
                  background: "var(--cream)",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--dark)",
                    marginBottom: "12px",
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
          padding: "80px 24px",
          background: "linear-gradient(135deg, var(--cream) 0%, var(--rose-gold-pale) 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <BookOpen size={40} style={{ color: "var(--rose-gold)", marginBottom: "20px" }} />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            ¿Lista para elegirte{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>sin miedo</span>?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--gray)",
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            Da el primer paso hoy. El libro que necesitabas ya existe — y fue escrito para ti.
          </p>
          <Link
            href="/libros/elegirme-sin-miedo"
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
            Conoce el libro <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ha-book-grid { grid-template-columns: 1fr !important; }
          .ha-book-info { padding: 40px 28px !important; }
        }
      `}</style>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Award, BookOpen, Mic, Heart, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Mí | Mi Historia",
  description:
    "Conoce a Heiddy Awais: psicóloga, coach de crecimiento personal, conferencista internacional, autora de 'Elegirme sin miedo' y participante del Récord Guinness. Más de 50 países recorridos.",
  alternates: { canonical: "https://heiddyawais.com/sobre-mi" },
  openGraph: {
    title: "Sobre Heiddy Awais | Psicóloga & Coach de Crecimiento Personal",
    description:
      "Psicóloga, coach, conferencista y autora. Conoce mi historia, mis valores y mi misión de acompañar a mujeres a elegirse sin miedo.",
    url: "https://heiddyawais.com/sobre-mi",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://heiddyawais.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sobre Mí",
      item: "https://heiddyawais.com/sobre-mi",
    },
  ],
};

const values = [
  {
    icon: Heart,
    title: "Autenticidad",
    description:
      "Creo profundamente en el poder de ser quien verdaderamente eres. Cada proceso de crecimiento comienza con honestidad radical contigo misma.",
  },
  {
    icon: Globe,
    title: "Curiosidad Global",
    description:
      "Más de 50 países me han enseñado que la sabiduría no tiene fronteras. Cada cultura, cada conversación, cada paisaje me ha formado como coach y como persona.",
  },
  {
    icon: Star,
    title: "Excelencia con Corazón",
    description:
      "Mentoreada por Spencer Hoffmann, me he comprometido con los más altos estándares en todo lo que hago — sin perder jamás la calidez humana.",
  },
  {
    icon: Award,
    title: "Impacto Sostenido",
    description:
      "No me interesa el cambio superficial. Mi trabajo está diseñado para crear transformaciones profundas y duraderas en la vida de mis clientes y audiencias.",
  },
];

const timeline = [
  {
    year: "Formación",
    title: "Psicología Clínica",
    description:
      "Estudié Psicología con especialización en psicología positiva y desarrollo humano, sentando las bases científicas de mi trabajo.",
  },
  {
    year: "Mentoría",
    title: "Bajo la guía de Spencer Hoffmann",
    description:
      "Tuve el privilegio de ser mentoreada por uno de los líderes de desarrollo personal más reconocidos de América Latina, lo que transformó mi visión del coaching.",
  },
  {
    year: "Récord",
    title: "Récord Guinness",
    description:
      "Participé en la obtención de un Récord Guinness, una experiencia que me demostró el poder ilimitado del trabajo en equipo y la mentalidad de excelencia.",
  },
  {
    year: "50+ Países",
    title: "Viajera del Mundo",
    description:
      "Recorrí más de 50 países, aprendiendo de las más diversas culturas y trayendo esas lecciones a mi práctica de coaching y conferencias.",
  },
  {
    year: "2024",
    title: "Autora Publicada",
    description:
      "Publiqué 'Elegirme sin miedo', un libro que condensa años de aprendizaje, psicología y experiencias de vida para acompañar a las mujeres en su proceso de autoelección.",
  },
  {
    year: "Hoy",
    title: "Conferencista Internacional",
    description:
      "Llevo mi mensaje a escenarios corporativos, eventos femeninos y plataformas globales, transformando audiencias con herramientas reales y un enfoque profundamente humano.",
  },
];

export default function SobreMiPage() {
  return (
    <>
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
          }}
        >
          <Link href="/" style={{ color: "var(--rose-gold)", textDecoration: "none" }}>
            Inicio
          </Link>
          <span>/</span>
          <span style={{ color: "var(--dark)" }}>Sobre Mí</span>
        </div>
      </div>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #FAFAF8 0%, #F5EDE4 60%, #FAFAF8 100%)",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
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
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="ha-grid"
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
              Mi historia
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "var(--dark)",
                marginBottom: "28px",
              }}
            >
              Soy Heiddy,{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                psicóloga con alma de viajera
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                color: "var(--gray)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Soy Coach de Crecimiento Personal, Psicóloga y Conferencista Internacional. Mi propósito
              es acompañar a mujeres a reconectar con su poder interno, liberarse del miedo y diseñar
              la vida extraordinaria que merecen.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                color: "var(--gray)",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}
            >
              Nacida con una curiosidad insaciable y una profunda pasión por el ser humano, he
              recorrido más de 50 países, obtenido un Récord Guinness, sido mentoreada por Spencer
              Hoffmann y publicado el libro <em style={{ color: "var(--rose-gold-dark)" }}>Elegirme sin miedo</em>.
            </p>
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
          </div>

          {/* Photo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "420px",
                maxWidth: "100%",
                borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                border: "3px solid rgba(196,149,106,0.2)",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(196,149,106,0.2)",
              }}
            >
              <img
                src="/images/heiddy-profesional.jpg"
                alt="Heiddy Awais — Psicóloga y Coach de Crecimiento Personal"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BIO EXPANDED */}
      <section style={{ padding: "80px 24px", background: "var(--white)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--rose-gold)",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Quién soy
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "40px",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Una historia de{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
              atreverse
            </span>
          </h2>

          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.0625rem",
              color: "var(--gray)",
              lineHeight: 1.9,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <p>
              Mi camino comenzó con una pregunta que muchas mujeres nos hacemos en algún momento de la
              vida: <strong style={{ color: "var(--dark-soft)" }}>¿qué pasaría si me eligiera a mí misma?</strong> No
              como un acto de egoísmo, sino como el acto de amor más profundo que podemos ofrecernos.
            </p>
            <p>
              Estudié Psicología porque quería entender a las personas — y quería entenderme a mí misma.
              La ciencia me dio herramientas. Los viajes me dieron perspectiva. La vida me dio humildad.
              Y la mentoría de Spencer Hoffmann me dio la claridad para fusionar todo en un camino de
              impacto real.
            </p>
            <p>
              He recorrido más de 50 países, y en cada uno aprendí algo diferente sobre el ser humano,
              sobre el miedo, sobre la valentía y sobre lo que significa verdaderamente estar viva. Esas
              experiencias son la columna vertebral de todo lo que enseño.
            </p>
            <p>
              Participar en un Récord Guinness fue una de las experiencias más transformadoras de mi vida.
              Me demostró, de manera visceral, que los límites que creemos que tenemos casi nunca son
              reales — son construcciones del miedo que podemos aprender a disolver.
            </p>
            <p>
              Hoy, a través de mis conferencias, mis programas de coaching y mi libro{" "}
              <em style={{ color: "var(--rose-gold-dark)" }}>Elegirme sin miedo</em>, acompaño a mujeres
              y organizaciones a dar ese primer paso: el de elegirse sin disculpas, sin excusas y sin miedo.
            </p>
          </div>

          <div
            style={{
              marginTop: "48px",
              padding: "40px",
              background: "var(--rose-gold-pale)",
              borderRadius: "16px",
              borderLeft: "4px solid var(--rose-gold)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.375rem",
                fontStyle: "italic",
                color: "var(--rose-gold-dark)",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              "La vida más extraordinaria comienza cuando dejas de pedir permiso para ser quien ya eres."
            </p>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--gray)",
              }}
            >
              — Heiddy Awais
            </span>
          </div>
        </div>
      </section>

      {/* PHOTO SECTION 2 */}
      <section
        style={{
          padding: "0",
          background: "var(--rose-gold-pale)",
          display: "flex",
          alignItems: "stretch",
          minHeight: "400px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 24px",
            minHeight: "400px",
            background: "rgba(196,149,106,0.12)",
          }}
        >
          <img
            src="/images/heiddy-guinness.jpg"
            alt="Heiddy Awais en la gala del Récord Guinness"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 48px",
          }}
          className="ha-bio-text"
        >
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
            En el escenario
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "24px",
              lineHeight: 1.2,
            }}
          >
            Conferencista que{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>mueve corazones</span>
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
            He tenido el privilegio de hablar en escenarios corporativos, eventos de liderazgo femenino
            y congresos internacionales. Cada presentación es una experiencia diseñada para crear una
            transformación real en quienes la viven.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--gray)",
              lineHeight: 1.8,
            }}
          >
            Mi enfoque combina la ciencia de la psicología positiva con la narrativa poderosa de mis
            viajes y experiencias, creando keynotes que informan, emocionan y motivan a la acción.
          </p>
        </div>
      </section>

      {/* VALUES */}
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
              Lo que me define
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
                lineHeight: 1.2,
              }}
            >
              Mis{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                valores y filosofía
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "28px",
            }}
          >
            {values.map((value, i) => (
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
                  <value.icon size={24} style={{ color: "var(--rose-gold)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--dark)",
                    marginBottom: "14px",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--gray)",
                    lineHeight: 1.7,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "96px 24px", background: "var(--white)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
              Mi camino
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
                lineHeight: 1.2,
              }}
            >
              Logros que me{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>forjaron</span>
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Timeline vertical line */}
            <div
              style={{
                position: "absolute",
                left: "24px",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(to bottom, var(--rose-gold), var(--rose-gold-light))",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {timeline.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "32px",
                    paddingLeft: "72px",
                    position: "relative",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "8px",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "var(--rose-gold)",
                      border: "4px solid var(--white)",
                      boxShadow: "0 0 0 2px var(--rose-gold)",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--rose-gold)",
                        marginBottom: "6px",
                      }}
                    >
                      {item.year}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "var(--dark)",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        color: "var(--gray)",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS STATS */}
      <section style={{ background: "var(--dark)", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "40px",
            textAlign: "center",
          }}
        >
          {[
            { icon: Globe, value: "50+", label: "Países recorridos" },
            { icon: Mic, value: "100+", label: "Conferencias dadas" },
            { icon: BookOpen, value: "1", label: "Libro publicado" },
            { icon: Award, value: "Récord", label: "Guinness" },
          ].map((stat, i) => (
            <div key={i} style={{ padding: "24px" }}>
              <stat.icon size={28} style={{ color: "var(--rose-gold)", marginBottom: "12px" }} />
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--gray-light)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
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
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 600,
              color: "var(--dark)",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            ¿Quieres que trabajemos{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>juntas</span>?
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
            Ya sea para una conferencia en tu empresa, coaching individual, o simplemente para decir
            hola — me encantaría conectar contigo.
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
            <Link
              href="/libros/elegirme-sin-miedo"
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
              Conoce mi libro
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ha-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ha-bio-text { padding: 40px 24px !important; }
        }
      `}</style>
    </>
  );
}

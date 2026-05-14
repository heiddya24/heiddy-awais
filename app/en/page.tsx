import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mic, Globe, Heart, Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Heiddy Awais | Personal Growth Coach & Psychologist",
  description:
    "Psychologist, personal growth coach, and internationally renowned speaker. Author of 'Elegirme sin miedo'. Guinness World Record participant. Visited over 50 countries.",
  alternates: {
    canonical: "https://heiddyawais.com/en",
    languages: {
      "en-US": "https://heiddyawais.com/en",
      "es-US": "https://heiddyawais.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
    url: "https://heiddyawais.com/en",
    siteName: "Heiddy Awais",
    title: "Heiddy Awais | Personal Growth Coach & Psychologist",
    description:
      "Psychologist, personal growth coach, and internationally renowned speaker. Author of 'Elegirme sin miedo'.",
  },
};

const stats = [
  { value: "50+", label: "Countries visited", icon: Globe },
  { value: "1", label: "Published book", icon: BookOpen },
  { value: "Record", label: "Guinness", icon: Award },
  { value: "100+", label: "Conferences", icon: Mic },
];

const pillars = [
  {
    icon: Heart,
    title: "Feminine Mindset",
    description:
      "We accompany women in reconnecting with their inner power, releasing fear, and designing an extraordinary life from a place of self-love.",
  },
  {
    icon: Mic,
    title: "High-Impact Talks",
    description:
      "Keynotes and workshops that transform corporate and female audiences with psychology and personal growth tools.",
  },
  {
    icon: BookOpen,
    title: "Knowledge That Liberates",
    description:
      "Through her books and programs, Heiddy shares decades of learning in psychology, travel, and human development.",
  },
];

const testimonials = [
  {
    quote:
      "Heiddy has a unique ability to touch people's hearts. Her conference was the most powerful of our annual event.",
    name: "HR Director",
    company: "Fortune 500",
    stars: 5,
  },
  {
    quote:
      "Thanks to her coaching, I finally dared to choose myself. You changed my life.",
    name: "Transformed Client",
    company: "New York",
    stars: 5,
  },
  {
    quote:
      "A psychologist with a traveler's soul and a mentor's heart. Absolutely exceptional.",
    name: "Event Organizer",
    company: "Miami",
    stars: 5,
  },
];

const pressLogos = [
  "Mentored by Spencer Hoffmann",
  "Guinness World Record",
  "International Speaker",
  "Certified Psychologist",
  "50+ Countries",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Heiddy Awais offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heiddy Awais offers personal growth coaching, corporate conferences and keynotes, feminine mindset workshops, and individual positive psychology sessions.",
      },
    },
    {
      "@type": "Question",
      name: "How can I hire Heiddy Awais for a conference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Heiddy directly through the contact form at heiddyawais.com, via WhatsApp at +15859789655, or by email at heiddya24@gmail.com.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy Heiddy Awais's book 'Elegirme sin miedo'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The book 'Elegirme sin miedo' by Heiddy Awais is available on Amazon and major digital bookstores.",
      },
    },
  ],
};

export default function EnglishHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Language switcher note */}
      <div
        style={{
          position: "fixed",
          top: "80px",
          right: "16px",
          zIndex: 100,
          background: "var(--white)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "8px 14px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8125rem",
          color: "var(--gray)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{ color: "var(--gray)", textDecoration: "none" }}
        >
          ES
        </Link>
        <span style={{ color: "var(--border)" }}>|</span>
        <span style={{ color: "var(--rose-gold)", fontWeight: 600 }}>EN</span>
      </div>

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
                Psychologist · Coach · Speaker
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
              Choosing yourself{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                without fear
              </span>{" "}
              is the first step.
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
              I am <strong style={{ color: "var(--dark)" }}>Heiddy Awais</strong>, psychologist and
              personal growth coach. I have traveled to over 50 countries, participated in a Guinness
              World Record, and my mission is to help you transform your life from within.
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
                Work with me <ArrowRight size={18} />
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
                My book
              </Link>
            </div>
          </div>

          {/* Image area */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "380px",
                height: "480px",
                borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                background: "linear-gradient(145deg, var(--rose-gold-light), var(--rose-gold-pale))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid rgba(196,149,106,0.2)",
                maxWidth: "100%",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    color: "var(--rose-gold-dark)",
                    opacity: 0.7,
                  }}
                >
                  Add your photo here
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--gray)",
                    marginTop: "8px",
                  }}
                >
                  /public/images/heiddy-hero.jpg
                </div>
              </div>
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
                Countries visited
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
                Record
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
                &ldquo;The most extraordinary life begins when you decide to choose yourself without fear.&rdquo;
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
              About me
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
              Psychologist with a{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                traveler&apos;s soul
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
              I am Heiddy Awais, psychologist, personal growth coach, and international speaker.
              My passion for understanding the human mind led me to visit over 50 countries, learning
              from cultures, people, and experiences that I now share with my clients and audiences.
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
              Mentored by Spencer Hoffmann, Guinness World Record participant, and author of{" "}
              <em style={{ color: "var(--rose-gold-dark)" }}>Elegirme sin miedo</em> — my invitation
              for you to dare to be yourself, fully and unapologetically.
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
              Discover my story <ArrowRight size={16} />
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
              My philosophy
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              Three pillars that{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                transform lives
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
              My book
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
              A powerful invitation to reconnect with who you truly are, release what no longer serves you,
              and dare to choose yourself — without guilt, without excuses, without fear.
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
              With tools from positive psychology, travel experiences, and deep reflections,
              this book is the companion you needed to begin living on your own terms.
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
              Discover the book <ArrowRight size={18} />
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
              Testimonials
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              What those who{" "}
              <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
                know me
              </span>{" "}
              say
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
            Recognized for
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
            Ready to{" "}
            <span style={{ color: "var(--rose-gold)", fontStyle: "italic" }}>
              transform your life
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
            Corporate conferences, individual coaching, or simply a conversation.
            I am here to accompany you.
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
              Contact me <ArrowRight size={18} />
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

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://heiddyawais.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Heiddy Awais | Coach de Crecimiento Personal & Psicóloga",
    template: "%s | Heiddy Awais",
  },
  description:
    "Heiddy Awais es psicóloga, coach de crecimiento personal y conferencista de renombre. Autora de 'Elegirme sin miedo'. Participante del Récord Guinness. Ha visitado más de 50 países.",
  keywords: [
    "Heiddy Awais",
    "coach de crecimiento personal",
    "psicóloga",
    "conferencista",
    "mentalidad femenina",
    "desarrollo personal",
    "Elegirme sin miedo",
    "empoderamento femenino",
  ],
  authors: [{ name: "Heiddy Awais", url: SITE_URL }],
  creator: "Heiddy Awais",
  openGraph: {
    type: "website",
    locale: "es_US",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Heiddy Awais",
    title: "Heiddy Awais | Coach de Crecimiento Personal & Psicóloga",
    description:
      "Psicóloga, coach de crecimiento personal y conferencista de renombre. Autora de 'Elegirme sin miedo'.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heiddy Awais | Coach de Crecimiento Personal",
    description:
      "Psicóloga, coach de crecimiento personal y conferencista de renombre.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-US": SITE_URL,
      "en-US": `${SITE_URL}/en`,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Heiddy Awais",
  url: SITE_URL,
  image: `${SITE_URL}/images/heiddy-awais.jpg`,
  description:
    "Psicóloga, coach de crecimiento personal, conferencista y autora de 'Elegirme sin miedo'. Participante del Récord Guinness. Ha visitado más de 50 países.",
  jobTitle: "Coach de Crecimiento Personal & Psicóloga",
  gender: "Female",
  nationality: "Venezuelan-American",
  knowsLanguage: ["es", "en"],
  knowsAbout: [
    "Crecimiento personal",
    "Mentalidad femenina",
    "Psicología positiva",
    "Liderazgo femenino",
    "Empoderamiento",
    "Desarrollo personal",
    "Bienestar emocional",
  ],
  sameAs: [
    "https://www.instagram.com/heiddyawais",
    "https://www.linkedin.com/in/heiddyawais",
    "https://www.tiktok.com/@heiddyawais",
    "https://www.youtube.com/@heiddyawais",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": SITE_URL,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Heiddy Awais",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: "var(--cream)" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

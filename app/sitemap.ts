import type { MetadataRoute } from "next";

const BASE_URL = "https://heiddyawais.com";

const blogSlugs = [
  "como-elegirte-sin-miedo",
  "mentalidad-femenina-poder",
  "lecciones-50-paises",
  "psicologia-amor-propio",
  "record-guinness-historia",
  "coaching-vs-psicologia",
  "habitos-mujer-exitosa",
  "miedo-al-exito-mujeres",
  "conferencista-internacional-camino",
  "viaje-sola-mujer-consejos",
  "liderar-desde-la-autenticidad",
  "elegirme-sin-miedo-libro-historia",
  "inteligencia-emocional-mujeres",
  "mentor-spencer-hoffmann-lecciones",
  "proposito-de-vida-encontrar",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sobre-mi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/libros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/libros/elegirme-sin-miedo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/conferencias`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/prensa`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

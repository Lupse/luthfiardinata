export const revalidate = 0; // disable cache

export default function sitemap() {
  return [
    {
      url: "https://luthfiardinata.vercel.app/",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}

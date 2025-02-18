import { NextResponse } from "next/server";

const BASE_URL = "https://rightclick.com.sa";

// اللغات المدعومة
const locales = ["en", "ar"];

// قائمة الصفحات الثابتة داخل مجلد `[locale]`
const staticPages = [
  "/", 
  "/about",
  "/services",
  "/Branding",
  "/ContentMarketing",
  "/DigitalMarketing",
  "/VisualProduction",
  "/WebsiteDevelopment",
  "/blogs",
  "/contact",
  "/portfolio",
  "/clients",
];

// **توليد `sitemap.xml` لدعم الصفحات العربية والإنجليزية**
export async function GET() {
  const pages = [];

  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      pages.push(`
        <url>
          <loc>${BASE_URL}/${locale}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>0.8</priority>
        </url>
      `);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

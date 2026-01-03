import "./globals.css";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import LayoutView from "@/modules/index-view";
import { Metadata, Viewport } from "next"; // Importamos Viewport
import Script from "next/script";

// PERFORMANCE: Definir 'subsets' reduce el peso de la fuente.
// 'display: swap' asegura que el texto se vea antes de cargar la fuente.
const interFont = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jebrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Home | Aaron Avila";
const description =
  "Creative Developer based in Venezuela. Specializing in building digital experiences, accessible interfaces, and scalable full-stack applications.";
const url = "https://aaronavila.is-a.dev";

// SEO: Configuración del Viewport y Theme Color separada (Estándar Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#FFFFFF", // Ajusta este color al background de tu web
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | Aaron Avila`,
  },
  description,
  // SEO: Canonical URL para evitar contenido duplicado
  alternates: {
    canonical: url,
  },
  keywords: [
    "Creative Developer",
    "Full Stack Developer",
    "Web Design",
    "UI/UX",
    "Venezuela",
    "React",
    "Next.js",
    "Frontend Engineering",
    "Aaron Avila", // Es bueno incluir tu nombre como keyword
  ],
  authors: [{ name: "Aaron Avila", url }],
  creator: "Aaron Avila",
  openGraph: {
    title,
    description,
    url,
    siteName: "Aaron Avila",
    locale: "en_US",
    type: "website",
    // images: [
    //   {
    //     url: "/og-image.png", // Asegúrate de tener una imagen og-image.png en public/
    //     width: 1200,
    //     height: 630,
    //     alt: "Aaron Avila Portfolio",
    //   },
    // ],
  },
  // SEO: Metadatos específicos para Twitter
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  formatDetection: {
    telephone: false,
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
};

// SEO: Datos Estructurados (Schema.org) para "Person"
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aaron Avila",
  url: url,
  jobTitle: "Creative Developer",
  description: description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "Venezuela",
  },
  sameAs: [
    "https://github.com/eswaldots",
    "https://linkedin.com/in/aaron-avila-b57919329",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className={`${interFont.variable} ${jebrainsMonoFont.variable} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden antialiased`}
        >
          {/* SEO: Inyección de JSON-LD */}
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            strategy="afterInteractive" // Carga después de la hidratación inicial, evitando el conflicto
          />
          <LayoutView>{children}</LayoutView>
        </body>
      </html>
    </>
  );
}

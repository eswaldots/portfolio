import AboutView from "@/modules/about-view";
import { Metadata } from "next";

// --- SEO: Metadata (Solo funciona en Server Components) ---
export const metadata: Metadata = {
  title: "About | Aaron Avila",
  description:
    "Digital Architect & Full Stack Developer based in Venezuela. Expert in System Design, UI Engineering and High-Performance Web Solutions.",
  openGraph: {
    title: "About | Aaron Avila",
    description:
      "Read about my journey from Full Stack Developer to Digital Architect.",
    // images: ['/about-og.jpg'] // Opcional: imagen específica para esta página
  },
};

export default function AboutPage() {
  return <AboutView />;
}

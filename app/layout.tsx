import "./globals.css";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import LayoutView from "@/modules/index-view";
import { Metadata } from "next";

const interFont = Inter_Tight({
  variable: "--font-inter",
});

const jebrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
});

const title = "Daimo";
const description = "Daimo es una plataforma de agentes de IA conversacionales";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Daimo",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Daimo",
  },
  formatDetection: {
    telephone: false,
  },
  // safe area for iOS PWA
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "white-translucent",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${interFont.variable} ${jebrainsMonoFont.variable} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
        >
          <LayoutView>{children}</LayoutView>
        </body>
      </html>
    </>
  );
}

import "./globals.css";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import LayoutView from "@/modules/index-view";

const interFont = Inter_Tight({
  variable: "--font-inter",
});

const jebrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
});

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

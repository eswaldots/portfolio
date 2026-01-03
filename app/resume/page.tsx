import ResumeView from "@/modules/resume-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional Resume of Aaron Avila. Full Stack Developer skilled in Next.js, React, Node.js, and UI Engineering.",
  openGraph: {
    title: "Resume | Aaron Avila",
    description: "View my professional experience, skills, and education.",
    type: "profile", // Tipo específico para perfiles de personas
  },
};

export default function ResumePage() {
  return <ResumeView />;
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";
import { ToastContainer } from "@/components/Toast";
import { SmoothScrollProvider } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniru De Silva — Full-Stack Software Engineer & Builder",
  description:
    "Portfolio of Daniru De Silva, IT Undergraduate @ University of Moratuwa (GPA 3.55/4.0) & Co-Founder at Delight Consumer Products. Specializing in Next.js 16, React 19, Supabase, and Cloud SaaS architectures.",
  keywords: [
    "Daniru De Silva",
    "University of Moratuwa",
    "Full-Stack Engineer",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase",
    "Zynveo ERP",
    "Delight Consumer Products",
    "Portfolio",
  ],
  authors: [{ name: "Daniru De Silva" }],
  openGraph: {
    title: "Daniru De Silva — Full-Stack Software Engineer & Builder",
    description:
      "IT Undergraduate @ University of Moratuwa (GPA 3.55/4.0) & Full-Stack Software Engineer. Building cloud ERPs, AI resume utilities, and e-commerce platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col`}
      >
        <SmoothScrollProvider>
          <ToastProvider>
            {children}
            <ToastContainer />
          </ToastProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

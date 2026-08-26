import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";
import { ToastContainer } from "@/components/Toast";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danirudesilva.com"),
  title: {
    default: "Daniru De Silva | Full-Stack Software Engineer & Co-Founder",
    template: "%s | Daniru De Silva",
  },
  description:
    "Portfolio of Daniru De Silva — Full-Stack Software Engineer & IT Undergraduate at University of Moratuwa. Specializing in cloud-native SaaS, Next.js, Supabase, and distributed systems.",
  keywords: [
    "Daniru De Silva",
    "Full-Stack Software Engineer Sri Lanka",
    "University of Moratuwa Software Engineer",
    "Next.js Developer Sri Lanka",
    "Zynveo ERP Creator",
    "Software Engineering Intern Sri Lanka",
  ],
  authors: [{ name: "Daniru De Silva", url: "https://danirudesilva.com" }],
  creator: "Daniru De Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danirudesilva.com",
    title: "Daniru De Silva | Full-Stack Software Engineer",
    description:
      "Engineering scalable SaaS, ERP business platforms, and AI applications. Undergraduate at University of Moratuwa.",
    siteName: "Daniru De Silva Portfolio",
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Daniru De Silva — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniru De Silva | Full-Stack Software Engineer",
    description:
      "Full-Stack Developer & Co-Founder building cloud-native SaaS and web systems.",
    images: ["/images/og-card.png"],
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
        <StructuredData />
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

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BentoSection } from "@/components/BentoSection";
import { TechMatrix } from "@/components/TechMatrix";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-100 selection:text-blue-900">
      {/* Top Floating Pill Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <ProjectsSection />
        <BentoSection />
        <TechMatrix />
        <Contact />
      </main>

      {/* Swiss Editorial Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "Case Studies", href: "#projects", id: "projects" },
  { label: "Leadership & Proof", href: "#leadership", id: "leadership" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("projects");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [localTime, setLocalTime] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { personal } = portfolioData;

  // Live ticking local clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // IntersectionObserver for active section tracking and scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id === "proof" ? "leadership" : entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-25% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["about", "projects", "leadership", "proof", "skills", "contact"];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-md shadow-slate-900/5 py-2 px-3 sm:px-5"
              : "bg-white/85 backdrop-blur-lg border border-slate-200/80 shadow-sm py-2.5 px-3 sm:px-6"
          } flex items-center justify-between gap-2 sm:gap-4`}
        >
          {/* Left: Brand Monogram & Live Beacon */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 group font-mono font-bold text-sm tracking-tight text-slate-900"
            >
              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono font-semibold tracking-wider group-hover:bg-blue-600 transition-colors shadow-sm">
                {personal.monogram}
              </span>
              <span className="hidden sm:inline-block font-semibold tracking-tight text-slate-800 text-sm">
                {personal.name}
              </span>
            </a>

            {/* Status Beacon & Clock */}
            <div className="hidden lg:flex items-center gap-2.5 pl-3 border-l border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 bg-emerald-50/80 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono font-medium text-emerald-700">
                  Open for Internships
                </span>
              </div>

              {localTime && (
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 bg-slate-100/70 px-2 py-0.5 rounded-full">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{localTime}</span>
                </div>
              )}
            </div>
          </div>

          {/* Center: Desktop Nav Links with Sliding Active Indicator */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-slate-900 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/80 -z-0"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-medium rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all active:scale-95 duration-150"
            >
              <span className="hidden sm:inline">Let&apos;s Talk</span>
              <span className="sm:hidden">Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl p-5 shadow-2xl shadow-slate-900/10 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-700 font-medium">
                  UoM • GPA 3.57
                </span>
              </div>
              {localTime && (
                <span className="text-xs font-mono text-slate-500">
                  {localTime}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                    activeSection === link.id
                      ? "bg-blue-50 text-blue-700 border-blue-200 font-semibold"
                      : "bg-slate-50 text-slate-700 border-slate-200/70 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium rounded-xl bg-blue-600 text-white shadow-sm"
              >
                <span>Initiate Direct Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

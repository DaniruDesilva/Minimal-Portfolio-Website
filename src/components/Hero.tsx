"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useToast } from "@/context/ToastContext";
import { Badge } from "./ui/Badge";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Hero() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const { personal, metrics } = portfolioData;

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    showToast(
      "Email Copied to Clipboard",
      `${personal.email} is ready to paste. Looking forward to discussing software engineering roles & projects!`,
      "copied"
    );
    setTimeout(() => setCopied(false), 2500);
  };

  const floatingTags = [
    { label: "Next.js 16", dotColor: "bg-blue-600", position: "-top-3 -left-3 sm:-left-4" },
    { label: "Supabase", dotColor: "bg-emerald-500", position: "bottom-16 -left-3 sm:-left-5" },
    { label: "React 19", dotColor: "bg-cyan-500", position: "top-1/4 -right-3 sm:-right-4" },
    { label: "Docker", dotColor: "bg-indigo-500", position: "-bottom-2 right-6" },
  ];

  return (
    <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 overflow-hidden">
      {/* Editorial Decorative Canvas Grid */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Editorial Intro & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-wrap items-center gap-2"
            >
              <Badge variant="accent" size="md" className="py-1 px-3">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-slate-800">
                  B.Sc. (Hons) IT @ University of Moratuwa • GPA 3.55/4.0
                </span>
              </Badge>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Engineering scalable <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">SaaS</span>, business systems, and web applications.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                Hi, I&apos;m <strong className="text-slate-900 font-bold">Daniru De Silva</strong>. Full-stack software engineer & co-founder with proven experience architecting cloud-native ERPs, e-commerce suites, and AI utilities.
              </p>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-3 py-2"
            >
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Academic Merit
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                  3.55 GPA
                </span>
                <span className="text-[10px] text-blue-600 block truncate">
                  Uni of Moratuwa
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Production
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                  5+ Live
                </span>
                <span className="text-[10px] text-emerald-600 block truncate">
                  SaaS & Systems
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Leadership
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                  Director
                </span>
                <span className="text-[10px] text-purple-600 block truncate">
                  Delight Products
                </span>
              </div>
            </motion.div>

            {/* Interactive Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-blue-600/20 active:scale-98"
              >
                <span>Explore Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>

              <button
                onClick={copyEmailToClipboard}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs hover:border-slate-300 font-mono text-xs transition-all active:scale-98"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-slate-700">{personal.email}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white hover:bg-blue-50 text-blue-600 border border-slate-200 shadow-2xs transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Frosted Porcelain Studio Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[370px]">
              {/* Soft Subtle Glow Background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-100/60 via-indigo-50/40 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Main Frosted Porcelain Profile Card */}
              <div className="relative p-3.5 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)]">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                  <Image
                    src="/images/Profile.png"
                    alt="Daniru De Silva — Full-Stack Software Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Elegant Status Footer Strip */}
                <div className="mt-3 flex items-center justify-between px-1.5 text-xs font-mono text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Open for Internships
                  </span>

                  <span className="text-[11px] font-mono text-slate-500">
                    Galle, Sri Lanka
                  </span>
                </div>
              </div>

              {/* Subtle Floating Frosted Tech Chips */}
              {floatingTags.map((tag, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + idx * 0.1 }}
                  className={`absolute ${tag.position} z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${tag.dotColor}`} />
                  <span>{tag.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

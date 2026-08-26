"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Check,
  Copy,
  GraduationCap,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useToast } from "@/context/ToastContext";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Hero() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const { personal } = portfolioData;

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

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* Editorial Decorative Canvas Grid */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column (7 cols): Editorial Intro & Actions */}
          <div className="lg:col-span-7 space-y-5">

            {/* 1. Academic Eyebrow Badge (Softened & Harmonized) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs text-slate-700 font-medium">
                <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                <span>B.Sc (Hons) IT @ University of Moratuwa</span>
                <span className="text-slate-300">•</span>
                <span className="font-mono text-slate-900 font-semibold">GPA 3.57/4.0</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2.5"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Engineering scalable <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">SaaS</span>, business systems, and web applications.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1.5">
                Hi, I&apos;m <strong className="text-slate-900 font-bold">Daniru De Silva</strong>. Full-stack software engineer & co-founder with proven experience architecting cloud-native ERPs, e-commerce suites, and AI utilities.
              </p>
            </motion.div>

            {/* 2. Interactive Action Row (Positioned Above Metrics for Maximum Conversion) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-98 cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>

              <button
                onClick={copyEmailToClipboard}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs hover:border-slate-300 font-mono text-xs transition-all active:scale-98"
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
                  className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-blue-50 text-blue-600 border border-slate-200 shadow-2xs transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* 3. Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3"
            >
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Academic Merit
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                  3.57 GPA
                </span>
                <span className="text-[10px] text-blue-600 block truncate">
                  University of Moratuwa
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
                  Entrepreneurship
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                  Co-Founder
                </span>
                <span className="text-[10px] text-purple-600 block truncate">
                  Delight Consumer Products (Pvt) Ltd.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Harmonized Profile Card with Terminal Icon */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm mx-auto group"
            >
              {/* Soft ambient background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/15 to-indigo-500/10 rounded-[2.5rem] blur-2xl transition-all group-hover:blur-3xl" />

              {/* Main Porcelain Card Container (Uniform Radius & Padding) */}
              <div className="relative p-3.5 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all">

                {/* Headshot Image Container (Matching Inner Radius) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <Image
                    src="/images/Profile.png"
                    alt="Daniru De Silva — Full-Stack Software Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Glass Credibility Badge with Clean Terminal SVG Icon */}
                  <div className="absolute bottom-3 left-3 right-auto z-10">
                    <div className="bg-white/90 backdrop-blur-md border border-white/80 rounded-xl px-3.5 py-2 shadow-lg shadow-black/5 flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-slate-900 leading-tight">
                          Full-Stack Developer
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                          University of Moratuwa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Strip */}
                <div className="mt-3 px-1.5 flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-2 font-medium text-emerald-600 bg-emerald-50/80 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Open for Internships
                  </span>
                  <span className="text-slate-500 font-medium font-mono text-xs">
                    Galle, Sri Lanka
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
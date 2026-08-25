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
    { label: "Next.js 16", color: "bg-blue-600 text-white", position: "top-4 -left-4 sm:-left-6" },
    { label: "Supabase", color: "bg-emerald-600 text-white", position: "bottom-12 -left-4 sm:-left-6" },
    { label: "React 19", color: "bg-slate-900 text-white", position: "top-1/3 -right-4 sm:-right-6" },
    { label: "Docker", color: "bg-indigo-600 text-white", position: "-bottom-3 right-6" },
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

          {/* Right Column (5 cols): High-End Profile Studio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[380px]">
              {/* Decorative Aura */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent rounded-3xl blur-xl -z-10" />

              {/* Main Profile Card */}
              <div className="porcelain-card rounded-2xl overflow-hidden p-3 bg-white border border-slate-200/90 shadow-xl">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/profile.jpg"
                    alt="Daniru De Silva — Full-Stack Software Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient bottom overlay for credentials */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent p-4 text-white">
                    <p className="font-bold text-base tracking-tight leading-none">
                      {personal.name}
                    </p>
                    <p className="text-xs text-slate-300 font-mono mt-1">
                      IT Undergraduate @ UoM
                    </p>
                  </div>
                </div>

                {/* Card footer meta badge */}
                <div className="p-2.5 pt-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-mono font-medium text-emerald-700">
                      Open for Internships & Projects
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">
                    Galle, LK
                  </span>
                </div>
              </div>

              {/* Floating Animated Skill Chips */}
              {floatingTags.map((tag, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  className={`absolute ${tag.position} z-20 px-3 py-1 rounded-full text-xs font-mono font-semibold shadow-lg shadow-slate-900/10 border border-white/40 backdrop-blur-md ${tag.color}`}
                >
                  {tag.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

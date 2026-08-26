"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/Badge";

export function BentoSection() {
  return (
    <section id="leadership" className="py-20 border-t border-slate-200/80 scroll-mt-24 bg-slate-50/40 relative">
      <span id="proof" className="absolute -top-24 opacity-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="accent" size="sm">
              <Award className="w-3.5 h-3.5" />
              <span>PROOF, LEADERSHIP & ACADEMIC MERIT</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic Excellence & Executive Track Record
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            I combine strong academic success from Sri Lanka's top engineering university with professional experience as a company director and the discipline of a championship martial artist.
          </p>
        </div>

        {/* Balanced 3-Column Equal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: University of Moratuwa (Academic Excellence) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
            className="porcelain-card rounded-2xl p-5 sm:p-7 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-all"
          >
            <div>
              {/* Top Row: Icon + Highlighted Badge */}
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 shadow-2xs">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold whitespace-nowrap shadow-2xs">
                  GPA 3.57
                </span>
              </div>

              {/* Single-Line Title & Subtitle */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  University of Moratuwa
                </h3>
                <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                  Faculty of IT
                </p>
              </div>

              {/* District Rank Highlight Pill */}
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 block font-semibold">
                    National Standing
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    District Rank 126 (A/L)
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs">
                  Top 3%
                </span>
              </div>

              <div className="space-y-2 pt-1 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Led the development of EduPath Platform, a multi-role educational platform.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Specializing in Distributed Systems & Web Architectures.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Graduating in 2028</span>
              <span className="text-blue-600 font-semibold">Undergraduate</span>
            </div>
          </motion.div>

          {/* Card 2: Delight Consumer Products (Directorship & Enterprise) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="porcelain-card rounded-2xl p-5 sm:p-7 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-purple-200 transition-all"
          >
            <div>
              {/* Top Row: Icon + Highlighted Badge */}
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/60 shadow-2xs">
                  <Briefcase className="w-5 h-5" />
                </div>

                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold whitespace-nowrap shadow-2xs">
                  2025 – Now
                </span>
              </div>

              {/* Single-Line Title & Subtitle */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  Delight Consumer Products
                </h3>
                <p className="text-[11px] font-mono text-purple-700 font-medium mt-0.5">
                  Co-Founder & Director (Pvt) Ltd.
                </p>
              </div>

              {/* Operational Focus Pill */}
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 block font-semibold">
                    Enterprise Domain
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    FMCG & Storefront Tech
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-purple-700 bg-white px-2 py-0.5 rounded border border-purple-200 shadow-2xs">
                  PayHere Live
                </span>
              </div>

              <div className="space-y-2 pt-1 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Engineered direct-to-consumer e-commerce storefront.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Integrated secure PayHere payment gateway checkout.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Built administrative inventory management CMS.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>2025 - Now</span>
              <span className="text-purple-600 font-semibold">Executive Leadership</span>
            </div>
          </motion.div>

          {/* Card 3: Championship Discipline (Karate & High-Pressure Execution) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="porcelain-card rounded-2xl p-5 sm:p-7 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-amber-200 transition-all"
          >
            <div>
              {/* Top Row: Icon + Highlighted Badge */}
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 shadow-2xs">
                  <Trophy className="w-5 h-5" />
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold whitespace-nowrap shadow-2xs">
                  2025 Medal
                </span>
              </div>

              {/* Single-Line Title & Subtitle */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  Sports Achievements
                </h3>
                <p className="text-[11px] font-mono text-amber-800 mt-0.5">
                  Karate & Kata
                </p>
              </div>

              {/* Athletic Standing Pill */}
              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 block font-semibold">
                    Competitive Honor
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    2nd Runner-up & Kata
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-amber-700 bg-white px-2 py-0.5 rounded border border-amber-200 shadow-2xs">
                  Podium Finish
                </span>
              </div>

              <div className="space-y-2 pt-1 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Represented university in competitive martial arts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>High-pressure tactical execution and composure.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Relentless mental discipline and team synchronization.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Martial Arts</span>
              <span className="text-amber-700 font-semibold">High-Pressure Execution</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

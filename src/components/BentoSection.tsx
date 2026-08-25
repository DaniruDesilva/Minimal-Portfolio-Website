"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/Badge";

export function BentoSection() {
  const { academic, directorship, athletics } = portfolioData;

  return (
    <section id="proof" className="py-20 border-t border-slate-200/80 scroll-mt-24 bg-slate-50/40">
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
            Combining rigorous academic distinction at Sri Lanka&apos;s premier engineering university with hands-on company directorship and championship martial arts discipline.
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
            className="porcelain-card rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-blue-200 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      Uni of Moratuwa
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500">
                      Faculty of IT (Hons)
                    </p>
                  </div>
                </div>

                <Badge variant="accent" size="sm">
                  GPA 3.55
                </Badge>
              </div>

              {/* District Rank Highlight Pill */}
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 my-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 block font-semibold">
                    National Standing
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    District Rank 126 (A/L)
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 shadow-2xs">
                  Top 1%
                </span>
              </div>

              <div className="space-y-2 pt-1 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Group Leader</strong> for flagship EduPath AI multi-role platform.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Dean&apos;s List standing in Data Structures & OOP.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Specializing in Distributed Systems & Web Architectures.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Class of 2027</span>
              <span className="text-blue-600 font-semibold">Undergraduate Scholar</span>
            </div>
          </motion.div>

          {/* Card 2: Delight Consumer Products (Directorship & Enterprise) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="porcelain-card rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-purple-200 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/60 shadow-2xs">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      Delight Products
                    </h3>
                    <p className="text-[11px] font-mono text-purple-700 font-medium">
                      Co-Founder & Director
                    </p>
                  </div>
                </div>

                <Badge variant="muted" size="sm">
                  2025 – Now
                </Badge>
              </div>

              {/* Operational Focus Pill */}
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 my-3.5 flex items-center justify-between">
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
              <span>Director (Pvt) Ltd</span>
              <span className="text-purple-600 font-semibold">Executive Leadership</span>
            </div>
          </motion.div>

          {/* Card 3: Championship Discipline (Karate & High-Pressure Execution) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="porcelain-card rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-amber-200 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 shadow-2xs">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      Athletic Discipline
                    </h3>
                    <p className="text-[11px] font-mono text-amber-800">
                      Karate & Kata
                    </p>
                  </div>
                </div>

                <Badge variant="accent" size="sm">
                  2025 Medal
                </Badge>
              </div>

              {/* Athletic Standing Pill */}
              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 my-3.5 flex items-center justify-between">
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

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
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
            Combining rigorous academic performance at Sri Lanka&apos;s premier engineering university with hands-on company directorship and martial arts discipline.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Academic Excellence (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="md:col-span-7 porcelain-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      University of Moratuwa
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      Faculty of Information Technology
                    </p>
                  </div>
                </div>

                <Badge variant="accent" size="md">
                  GPA 3.55 / 4.00
                </Badge>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 my-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 block font-semibold">
                    National Examination Standing
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {academic.districtRank}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-blue-600 bg-white px-2 py-1 rounded-md border border-blue-200">
                  Top 1%
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Pursuing a B.Sc. (Hons) in Information Technology at Sri Lanka&apos;s leading technical institution, maintaining high distinction across Data Structures, Distributed Computing, and Web Engineering.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                {academic.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Expected Graduation: 2027</span>
              <span className="text-blue-600 font-semibold">Undergraduate Scholar</span>
            </div>
          </motion.div>

          {/* Card 2: Co-Founder & Directorship (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="md:col-span-5 porcelain-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/60">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      Delight Consumer Products
                    </h3>
                    <p className="text-xs font-mono text-purple-700 font-medium">
                      Co-Founder & Director (Pvt) Ltd
                    </p>
                  </div>
                </div>

                <Badge variant="muted" size="sm">
                  {directorship.timeline}
                </Badge>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {directorship.summary}
              </p>

              <div className="space-y-2">
                {directorship.contributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Domain: FMCG & E-Commerce</span>
              <span className="text-purple-600 font-semibold">Executive Leadership</span>
            </div>
          </motion.div>

          {/* Card 3: Athletics & Martial Arts Discipline (12 cols full width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="md:col-span-12 porcelain-card rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/70 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900">
                    {athletics.achievement}
                  </h3>
                  <Badge variant="accent" size="sm">
                    {athletics.year} Championship
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                  {athletics.details} Competitive athletics cultivates extreme composure under pressure, relentless dedication, and team synchronization.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200/60">
              <Medal className="w-4 h-4 text-amber-600" />
              <span>Championship Discipline</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

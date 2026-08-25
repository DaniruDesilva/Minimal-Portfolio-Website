"use client";

import React from "react";
import { ArrowUp, Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-slate-200/90 bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand Monogram & Meta */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-mono font-semibold">
              {personal.monogram}
            </span>
            <div>
              <p className="text-xs font-bold text-slate-900 tracking-tight">
                {personal.name}
              </p>
              <p className="text-[11px] font-mono text-slate-500">
                Full-Stack Software Engineer • IT Undergraduate @ UoM
              </p>
            </div>
          </div>

          {/* System Status and Location */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Next.js 16 • React 19 • Supabase</span>
            </div>

            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with Swiss Minimalist Precision
          </p>
        </div>
      </div>
    </footer>
  );
}

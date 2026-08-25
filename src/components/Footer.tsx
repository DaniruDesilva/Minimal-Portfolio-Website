"use client";

import React from "react";
import { ArrowUp, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200/70 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Top Row: Identity, Location, Quick Links, Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6">
          {/* Left: Identity */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-mono text-xs font-bold shadow-2xs">
              {personal.monogram}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-tight">
                {personal.name}
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Full-Stack Software Engineer • IT Undergraduate @ University of Moratuwa
              </p>
            </div>
          </div>

          {/* Right: Location + Socials + Back to Top */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{personal.location}</span>
            </div>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 text-slate-600 hover:text-blue-600 transition-colors shadow-2xs"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium shadow-2xs transition-all active:scale-95 ml-1"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-sans">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">
            Designed & Built with Clean Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}

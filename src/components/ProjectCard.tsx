"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Cpu,
  Layers,
} from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

type TabType = "problem" | "architecture" | "impact";

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("problem");

  const tabs: { id: TabType; label: string; shortLabel: React.ReactNode; icon: React.ReactNode }[] = [
    {
      id: "problem",
      label: "Problem & Solution",
      shortLabel: "Problem",
      icon: <Layers className="w-3.5 h-3.5 shrink-0" />,
    },
    {
      id: "architecture",
      label: "Architecture",
      shortLabel: (
        <>
          <span className="hidden min-[380px]:inline">Architecture</span>
          <span className="min-[380px]:hidden">Arch</span>
        </>
      ),
      icon: <Cpu className="w-3.5 h-3.5 shrink-0" />,
    },
    {
      id: "impact",
      label: "Key Impact",
      shortLabel: "Impact",
      icon: <BarChart3 className="w-3.5 h-3.5 shrink-0" />,
    },
  ];

  return (
    <article
      className="porcelain-card rounded-2xl p-4 sm:p-7 bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 w-full min-w-0 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch w-full min-w-0">
        {/* Media / Browser Device Frame Side (6 cols consistently on Left) */}
        <div className="lg:col-span-6 flex flex-col justify-center w-full min-w-0">
          <div className="rounded-xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-50 group w-full min-w-0">
            {/* Simulated Browser Chrome Topbar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-slate-100/90 border-b border-slate-200/80 gap-2 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
              </div>

              <div className="px-2.5 sm:px-3.5 py-0.5 rounded-md bg-white border border-slate-200/80 text-[10px] sm:text-[11px] font-mono text-slate-600 truncate text-center shadow-2xs flex-1 min-w-0">
                {project.liveUrl ? project.liveUrl.replace("https://", "").replace(/\/$/, "") : `danirudesilva.com/${project.id}`}
              </div>

              <div className="w-6 sm:w-8 flex justify-end shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              </div>
            </div>

            {/* Normalized 16/10 Aspect Ratio Screenshot Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-t border-slate-200/80">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.summary}`}
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-xs"
                >
                  <span className="bg-white/95 text-slate-900 px-4 py-2 rounded-full shadow-lg font-semibold text-xs flex items-center gap-1.5 hover:bg-white hover:scale-105 transition-all">
                    Launch Production App
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Data & Interactive Blueprint Side (6 cols on Right) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4 w-full min-w-0">
          <div className="space-y-3 w-full min-w-0">
            {/* Top Metadata Strip */}
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1 w-full min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-mono font-semibold text-[11px] border border-blue-100 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-slate-600 truncate">{project.category}</span>
              </div>
              <span className="font-mono text-slate-400 text-xs shrink-0 ml-2">{project.year}</span>
            </div>

            {/* Standardized Title with text-balance */}
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug break-words">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
              {project.summary}
            </p>

            {/* Fully Responsive 3-Column Interactive Sliding Tab Controls */}
            <div className="w-full bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 min-w-0">
              <div className="grid grid-cols-3 gap-1 w-full">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center justify-center gap-1 sm:gap-1.5 px-1 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors w-full min-w-0 ${
                        isActive ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId={`projectDetailTab-${project.id}`}
                          className="absolute inset-0 bg-white rounded-lg shadow-xs border border-slate-200/80 -z-0"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-1.5 min-w-0">
                        {tab.icon}
                        <span className="hidden sm:inline truncate">{tab.label}</span>
                        <span className="sm:hidden truncate text-[11px]">{tab.shortLabel}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Body Content with Consistent Container Styling */}
            <div className="min-h-[120px] sm:min-h-[130px] py-1 w-full min-w-0">
              <AnimatePresence mode="wait">
                {activeTab === "problem" && (
                  <motion.div
                    key="problem"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3.5 sm:p-4 text-[13px] break-words"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      The Engineering Challenge
                    </span>
                    <p className="text-slate-600 leading-relaxed text-[13px] break-words">
                      {project.problem}
                    </p>
                  </motion.div>
                )}

                {activeTab === "architecture" && (
                  <motion.div
                    key="architecture"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-1.5 w-full min-w-0"
                  >
                    {project.architecture.map((layer, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-mono text-slate-800 min-w-0"
                      >
                        <span className="w-4 h-4 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-[9px] font-bold shrink-0">
                          {lIdx + 1}
                        </span>
                        <span className="truncate min-w-0">{layer}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "impact" && (
                  <motion.div
                    key="impact"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full min-w-0"
                  >
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center min-w-0"
                      >
                        <div className="text-xs sm:text-base font-bold text-blue-600 font-mono truncate">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-600 mt-0.5 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Full-Width Core Tech Stack Block */}
          <div className="space-y-1.5 pt-1 w-full min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Core Stack
            </span>
            <div className="flex flex-wrap items-center gap-1.5 w-full">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 text-[11px] sm:text-xs font-mono font-medium border border-slate-200/70 leading-none shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Dedicated Full-Width Action Bar */}
          <div className="pt-3.5 border-t border-slate-100 flex items-center w-full min-w-0">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm shadow-blue-500/20 transition-all hover:gap-2 active:scale-98 w-full sm:w-auto"
              >
                <span>Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-500 text-xs font-mono select-none w-full sm:w-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                Internal Build
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

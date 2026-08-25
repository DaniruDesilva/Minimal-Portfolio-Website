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
import { GithubIcon } from "./ui/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

type TabType = "problem" | "architecture" | "impact";

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("problem");

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "problem", label: "Problem & Solution", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "architecture", label: "Architecture", icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: "impact", label: "Key Impact", icon: <BarChart3 className="w-3.5 h-3.5" /> },
  ];

  return (
    <article
      className="porcelain-card rounded-2xl p-5 sm:p-7 bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
    >
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Media / Browser Device Frame Side (6 cols consistently on Left) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="rounded-xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-50 group">
            {/* Simulated Browser Chrome Topbar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 border-b border-slate-200/80">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
              </div>

              <div className="px-3.5 py-0.5 rounded-md bg-white border border-slate-200/80 text-[11px] font-mono text-slate-600 max-w-[240px] truncate text-center shadow-2xs mx-2 flex-1">
                {project.liveUrl ? project.liveUrl.replace("https://", "").replace(/\/$/, "") : `danirudesilva.com/${project.id}`}
              </div>

              <div className="w-8 flex justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              </div>
            </div>

            {/* Normalized 16/10 Aspect Ratio Screenshot Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-t border-slate-200/80">
              <Image
                src={project.image}
                alt={project.title}
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
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {/* Top Metadata Strip */}
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-mono font-semibold text-[11px] border border-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-slate-600">{project.category}</span>
              </div>
              <span className="font-mono text-slate-400 text-xs">{project.year}</span>
            </div>

            {/* Standardized Title with text-balance */}
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug text-balance">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.summary}
            </p>

            {/* Interactive Sliding Tab Controls */}
            <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 w-fit">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
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
                    <span className="relative z-10 flex items-center gap-1.5">
                      {tab.icon}
                      <span>{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tab Body Content with Consistent Container Styling */}
            <div className="min-h-[130px] py-1">
              <AnimatePresence mode="wait">
                {activeTab === "problem" && (
                  <motion.div
                    key="problem"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 text-[13px]"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      The Engineering Challenge
                    </span>
                    <p className="text-slate-600 leading-relaxed text-[13px]">
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
                    className="space-y-1.5"
                  >
                    {project.architecture.map((layer, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-mono text-slate-800"
                      >
                        <span className="w-4 h-4 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-[9px] font-bold shrink-0">
                          {lIdx + 1}
                        </span>
                        <span className="truncate">{layer}</span>
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
                    className="grid grid-cols-2 gap-2.5"
                  >
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center"
                      >
                        <div className="text-sm sm:text-base font-bold text-blue-600 font-mono">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-600 mt-0.5">
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
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Core Stack
            </span>
            <div className="flex flex-wrap items-center gap-1.5 w-full">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 text-xs font-mono font-medium border border-slate-200/70 leading-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Dedicated Full-Width Action Bar */}
          <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
                <span>Source Code</span>
              </a>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm shadow-blue-500/20 transition-all hover:gap-2 active:scale-98"
                >
                  <span>Live Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-500 text-xs font-mono select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Internal Build
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

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
import { Badge } from "./ui/Badge";
import { Tooltip } from "./ui/Tooltip";
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
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Media / Browser Device Frame Side (6 cols consistently on Left) */}
        <div className="lg:col-span-6">
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

            {/* Screenshot Container with Hover Zoom */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src={project.image}
                alt={`${project.title} Interface Screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
        <div className="lg:col-span-6 space-y-4">
          {/* Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-blue-600 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200/60">
                PROJ-0{index + 1}
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">
                {project.category}
              </span>
            </div>

            <Badge variant="muted" size="sm">
              {project.year}
            </Badge>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
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

          {/* Tab Body Content with Crossfade */}
          <div className="min-h-[135px] py-1">
            <AnimatePresence mode="wait">
              {activeTab === "problem" && (
                <motion.div
                  key="problem"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 sm:p-4 text-xs sm:text-sm text-slate-700"
                >
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    The Engineering Problem
                  </span>
                  <p className="leading-relaxed text-slate-700">{project.problem}</p>
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
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-xs font-mono text-slate-800"
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

          {/* Tech Stack Chips & High-Contrast Action Buttons */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            {/* Tech Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {project.techStack.map((tech, tIdx) => (
                <Tooltip
                  key={tIdx}
                  content={`Built using ${tech} for production reliability.`}
                >
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors">
                    {tech}
                  </span>
                </Tooltip>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 transition-all shadow-2xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-xs hover:shadow-md transition-all active:scale-98"
                >
                  <span>Live Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="px-3 py-1.5 rounded-lg text-[11px] font-mono bg-slate-100 text-slate-500 border border-slate-200">
                  Internal Engineering Build
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Layers,
  Sparkles,
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
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="porcelain-card rounded-2xl p-5 sm:p-7 bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
    >
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Media / Browser Device Frame Side (6 cols) */}
        <div
          className={`lg:col-span-6 ${
            isEven ? "lg:order-first" : "lg:order-last"
          }`}
        >
          <div className="rounded-xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-50 group">
            {/* Simulated Browser Chrome Topbar */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-slate-100/90 border-b border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200/70 text-[10px] font-mono text-slate-500 max-w-[200px] truncate text-center">
                {project.liveUrl || `localhost:3000/${project.id}`}
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
                  className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-xs"
                >
                  <span className="bg-white/90 text-slate-900 px-3.5 py-1.5 rounded-full shadow-lg font-semibold flex items-center gap-1.5">
                    Launch Production App
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Data & Interactive Blueprint Side (6 cols) */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            isEven ? "lg:order-last" : "lg:order-first"
          }`}
        >
          {/* Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-blue-600 px-2 py-0.5 rounded bg-blue-50 border border-blue-200/60">
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

          {/* Interactive Tab Controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200/80 w-fit">
            <button
              onClick={() => setActiveTab("problem")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === "problem"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Problem & Solution</span>
            </button>

            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === "architecture"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab("impact")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === "impact"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <BarChart3 className="w-3 h-3" />
              <span>Key Impact</span>
            </button>
          </div>

          {/* Tab Body Content */}
          <div className="min-h-[140px] py-1">
            <AnimatePresence mode="wait">
              {activeTab === "problem" && (
                <motion.div
                  key="problem"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-2.5 text-xs text-slate-700 leading-relaxed"
                >
                  <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/60">
                    <strong className="text-amber-900 font-mono block text-[10px] uppercase mb-0.5">
                      The Challenge
                    </strong>
                    <span>{project.problem}</span>
                  </div>
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

          {/* Tech Stack Chips & Action Buttons */}
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
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-xs transition-all"
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
    </motion.article>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projectsData } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: "All Systems" },
    { id: "Cloud SaaS", label: "Cloud SaaS" },
    { id: "AI Tools", label: "AI Tools" },
    { id: "E-Commerce", label: "E-Commerce" },
    { id: "EdTech", label: "EdTech" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (p) =>
            p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            selectedCategory.toLowerCase().includes(p.category.toLowerCase())
        );

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          {/* Left: Section Title & Subtitle */}
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRODUCTION CASE STUDIES & BLUEPRINTS</span>
              <span>•</span>
              <span>{projectsData.length} Live Systems</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore split-blueprint case studies covering cloud-native SaaS, AI scoring engines, production e-commerce suites, and university lead systems.
            </p>
          </div>

          {/* Right: Clean Unbroken Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shrink-0 self-start lg:self-end overflow-x-auto max-w-full shadow-2xs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? "text-white font-semibold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryFilter"
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-xs -z-0"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards List with Smooth AnimatePresence Layout */}
        <motion.div layout className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projectsData } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "./ui/Badge";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Cloud SaaS & Operations",
    "AI Tools & Web Applications",
    "Production E-Commerce & Enterprise",
    "EdTech & Classifieds",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="accent" size="sm">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>PRODUCTION CASE STUDIES & BLUEPRINTS</span>
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                {projectsData.length} Live & Flagship Systems
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Explore split-blueprint case studies covering cloud-native SaaS, AI resume scoring engines, production e-commerce suites, and university lead systems.
            </p>
          </div>

          {/* Category Filter Pills with Sliding Layout Indicator */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-2xs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                    isSelected ? "text-white font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryFilter"
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-xs -z-0"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat === "All" ? "All Systems" : cat.split("&")[0].trim()}
                  </span>
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

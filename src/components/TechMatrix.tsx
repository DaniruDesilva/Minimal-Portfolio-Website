"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  CheckCircle,
  Code2,
  Cpu,
  HelpCircle,
  Layers,
  Sparkles,
} from "lucide-react";
import { skillsCategories } from "@/data/portfolio";
import { Badge } from "./ui/Badge";
import { Tooltip } from "./ui/Tooltip";

export function TechMatrix() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case "Layers":
        return <Layers className="w-4 h-4 text-indigo-600" />;
      case "Cpu":
      default:
        return <Cpu className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="accent" size="sm">
              <Cpu className="w-3.5 h-3.5" />
              <span>SKILLS & CAPABILITIES MATRIX</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Stack & Engineering Depth
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Hover over any language, framework, or database to inspect its production use-case and hands-on implementation details.
          </p>
        </div>

        {/* Bento Grid Layout for Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: catIdx * 0.1 }}
              className="porcelain-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-blue-200 bg-white"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {category.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {category.items.length} Technologies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  {category.tagline}
                </p>

                {/* Skill Items List */}
                <div className="space-y-2.5">
                  {category.items.map((skill, sIdx) => (
                    <Tooltip
                      key={sIdx}
                      position="top"
                      className="w-72"
                      content={
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] border-b border-slate-700/80 pb-1 font-mono">
                            <span className="font-semibold text-blue-300">
                              {skill.name}
                            </span>
                            <span className="text-slate-400">
                              {skill.experience}
                            </span>
                          </div>
                          <p className="text-xs text-slate-200 font-sans leading-normal">
                            {skill.useCase}
                          </p>
                        </div>
                      }
                    >
                      <div className="w-full group flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 hover:bg-blue-50/70 border border-slate-200/60 hover:border-blue-200 transition-all cursor-help">
                        <div className="flex items-center gap-2">
                          {skill.highlight ? (
                            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          ) : (
                            <CheckCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 group-hover:text-blue-500 transition-colors" />
                          )}
                          <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-900 transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-700">
                            {skill.experience}
                          </span>
                          <span
                            className={`text-[9px] font-mono font-medium px-1.5 py-0.5 rounded ${
                              skill.level === "Expert"
                                ? "bg-blue-100/70 text-blue-800"
                                : "bg-slate-200/70 text-slate-700"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* Bottom Hint */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <HelpCircle className="w-3 h-3" /> Hover for practical use
                </span>
                <span className="text-slate-500 font-medium">UoM & Production</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

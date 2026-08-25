"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  HelpCircle,
  Layers,
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
            Hover over any technology chip to reveal practical implementation details, production use cases, and hands-on depth.
          </p>
        </div>

        {/* Balanced 3-Column Equal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {skillsCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: catIdx * 0.08 }}
              className="porcelain-card flex flex-col h-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-2xs hover:border-blue-200 transition-all justify-between"
            >
              {/* Category Header & Chips */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {category.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {category.items.length} Production Skills
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  {category.tagline}
                </p>

                {/* Symmetrical 2-Column Grid */}
                <div className="grid grid-cols-2 gap-2.5 flex-1 mb-6">
                  {category.items.map((skill) => (
                    <Tooltip
                      key={skill.name}
                      position="top"
                      className="w-72 z-50"
                      wrapperClassName="w-full flex flex-col"
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
                      <div className="w-full flex flex-col justify-center p-2.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/70 hover:border-blue-400 hover:shadow-xs transition-all cursor-default group">
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 truncate">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-medium mt-0.5">
                          {skill.level}
                        </span>
                      </div>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* Grounded Baseline Footer with Hairline Divider */}
              <div className="mt-auto pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <HelpCircle className="w-3.5 h-3.5" /> Hover for details
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

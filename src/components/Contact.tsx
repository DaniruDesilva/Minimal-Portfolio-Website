"use client";

import React, { useState } from "react";
import {
  Check,
  Copy,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useToast } from "@/context/ToastContext";
import { Badge } from "./ui/Badge";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Contact() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("Software Engineering Internship");
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inquiryTypes = [
    "Software Engineering Internship",
    "Full-Stack Web App Development",
    "SaaS / Cloud ERP Consulting",
    "E-Commerce & Payment Setup",
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    showToast(
      "Email Copied!",
      `${personal.email} copied to your clipboard.`,
      "copied"
    );
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast("Missing Fields", "Please enter your name, email, and message.", "info");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast(
        "Message Sent Successfully",
        `Thank you ${formData.name}. Daniru will review your inquiry (${selectedType}) and get back to you shortly!`,
        "success"
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 850);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 scroll-mt-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="accent" size="sm">
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT INQUIRY & CONTACT</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Build Something High-Impact
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Interested in discussing software engineering internships, SaaS platforms, or full-stack contracts? Reach out directly or dispatch an inquiry below.
          </p>
        </div>

        {/* Equalized Height 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (5 cols): Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col h-full bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Direct Contact Channels
            </h3>

            <div className="space-y-3 flex-1 mb-4">
              {/* Primary Email */}
              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Primary Email
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">
                    {personal.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="shrink-0 p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 shadow-2xs transition-colors"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* International Direct Phone */}
              <a
                href="tel:+94778231019"
                className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Phone / Mobile
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                    +94 77 823 1019
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
              </a>

              {/* Unified WhatsApp Trigger */}
              <a
                href="https://wa.me/94778231019"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-300 hover:bg-emerald-50/30 flex items-center justify-between transition-all group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    WhatsApp Direct
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-emerald-700">
                    Instant message & inquiries
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 group-hover:text-emerald-600 shadow-2xs transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* Work Meta Tile */}
            <div className="pt-4 border-t border-slate-100 mb-4">
              <div className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/70 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider">
                    Work Authorization
                  </span>
                  <span className="font-medium text-slate-700">
                    Internship & Contracts
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider">
                    Location Base
                  </span>
                  <span className="font-medium text-slate-700">
                    Galle, Sri Lanka (Remote Ready)
                  </span>
                </div>
              </div>
            </div>

            {/* Profiles Footer */}
            <div className="mt-auto pt-4 border-t border-slate-100">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Engineering Profiles
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-xs font-medium text-blue-700 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Project Inquiry Form */}
          <div className="lg:col-span-7 flex flex-col h-full bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-8 shadow-2xs">
            {/* Form Card Header (Stack on Mobile, Row on Tablet/Desktop) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  Send a Message or Project Brief
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-mono mt-0.5">
                  Estimated response time: &lt; 24 hours
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-medium self-start sm:self-auto shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Open for Opportunities
              </span>
            </div>

            {/* Inputs with Crisp Borders & Form Structure */}
            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Inquiry Type Chips */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">
                  Opportunity / Inquiry Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all border ${
                        selectedType === type
                          ? "bg-blue-600 border-blue-600 text-white shadow-xs font-semibold"
                          : "bg-slate-50/80 border-slate-200/70 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Message / Brief *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the engineering role, project requirements, or technical goals..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                />
              </div>

              {/* Action Footer */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-stretch sm:justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 transition-all active:scale-98 w-full sm:w-auto"
                >
                  <span>{isSubmitting ? "Sending Message..." : "Send Direct Message"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

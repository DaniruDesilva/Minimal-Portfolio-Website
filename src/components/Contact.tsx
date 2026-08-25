"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useToast } from "@/context/ToastContext";
import { Badge } from "./ui/Badge";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Contact() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedScope, setSelectedScope] = useState<string>("Software Engineering Internship");
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Project / Internship Opportunity",
    message: "",
  });

  const scopeOptions = [
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
        `Thank you ${formData.name}. Daniru will review your inquiry and get back to you shortly!`,
        "success"
      );
      setFormData({
        name: "",
        email: "",
        subject: "Full-Stack Project / Internship Opportunity",
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="porcelain-card rounded-2xl p-6 bg-white border border-slate-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900">
                Direct Contact Channels
              </h3>

              <div className="space-y-3">
                {/* Email Box with Copy */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Primary Email
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-800 truncate block">
                      {personal.email}
                    </span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="shrink-0 p-2 rounded-lg bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 shadow-2xs transition-colors"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Direct Phone Number */}
                <a
                  href={`tel:${personal.phone}`}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center justify-between gap-3 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Direct Phone / Mobile
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-800">
                      {personal.phone}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white text-slate-700 border border-slate-200 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                </a>

                {/* WhatsApp Chat */}
                <a
                  href={`https://wa.me/94${personal.phone.replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/60 border border-emerald-200/70 flex items-center justify-between gap-3 transition-colors group"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 block font-semibold">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-xs text-emerald-900 font-medium">
                      Direct message for fast project response
                    </span>
                  </div>
                  <MessageSquare className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-3 font-semibold">
                  Engineering Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-800" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-blue-700 text-xs font-medium border border-slate-200/60 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="porcelain-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Send a Message or Project Brief
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Estimated response time: &lt; 24 hours
                  </p>
                </div>
                <Badge variant="accent" size="sm">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>Open for Opportunities</span>
                </Badge>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-700 block">
                      Your Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-700 block">
                      Your Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Scope Options */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold text-slate-700 block">
                    Opportunity / Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {scopeOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setSelectedScope(opt)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          selectedScope === opt
                            ? "bg-blue-600 text-white font-semibold shadow-xs"
                            : "bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-700 block">
                    Message / Brief <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the engineering role, project requirements, or technical goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/25 transition-all active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

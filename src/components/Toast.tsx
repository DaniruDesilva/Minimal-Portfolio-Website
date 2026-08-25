"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Copy, Info, X } from "lucide-react";
import { useToast } from "@/context/ToastContext";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.15 } }}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-white/95 border border-slate-200/90 shadow-lg shadow-slate-900/5 backdrop-blur-md text-slate-800"
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === "copied" ? (
                <div className="p-1 rounded-md bg-blue-50 text-blue-600">
                  <Copy className="w-4 h-4" />
                </div>
              ) : toast.type === "info" ? (
                <div className="p-1 rounded-md bg-slate-100 text-slate-700">
                  <Info className="w-4 h-4" />
                </div>
              ) : (
                <div className="p-1 rounded-md bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold tracking-tight text-slate-900 font-mono uppercase">
                {toast.title}
              </p>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-md hover:bg-slate-100"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

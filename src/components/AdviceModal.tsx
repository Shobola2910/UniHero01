// src/components/AdviceModal.tsx
"use client";

import { useEffect } from "react";

export default function AdviceModal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative w-full sm:max-w-lg rounded-2xl bg-[#0e1c3f] p-5 sm:p-6 ring-1 ring-white/10 shadow-2xl mx-2">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-white/70 hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="text-sm leading-relaxed text-white/85">{children}</div>
      </div>
    </div>
  );
}

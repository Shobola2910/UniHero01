// src/components/AdviceModal.tsx
"use client";

import { useEffect } from "react";

export default function AdviceModal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  // Close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
    >
      {/* Backdrop (click to close) */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative z-[210] w-full max-w-3xl rounded-2xl bg-[#0f1e3d]/95 p-5 ring-1 ring-white/15 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="text-white/90">{children}</div>
      </div>
    </div>
  );
}

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
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* overlay (click to close) */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* panel */}
      <div className="relative z-10 w-[min(92vw,720px)] rounded-2xl bg-[#0d1f45] p-5 ring-1 ring-white/15">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-1.5 ring-1 ring-white/20 hover:bg-white/20"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="text-white/90">{children}</div>
      </div>
    </div>
  );
}

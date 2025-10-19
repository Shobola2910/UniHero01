// src/components/AdviceModal.tsx
"use client";
import { ReactNode, useEffect } from "react";

export default function AdviceModal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  // ESC bilan yopish
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
      aria-modal
      role="dialog"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      {/* Card */}
      <div
        className="relative z-[101] w-full md:max-w-xl rounded-2xl bg-[#0c1f3f] text-white ring-1 ring-white/10 p-5 md:p-6 m-3 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <button
            className="shrink-0 rounded-full px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-3 text-[15px] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}


"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/config/brand";
import { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{ delay?: number; className?: string }>;

export function Reveal({ delay = 0, className = "", children }: RevealProps) {
  if (!BRAND.enableAnimations) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: BRAND.defaultRevealMs, delay }}
    >
      {children}
    </motion.div>
  );
}

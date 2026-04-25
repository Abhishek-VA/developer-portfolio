"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "./Button";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn("glass rounded-2xl p-6 md:p-8 relative overflow-hidden group", className)}
    >
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 transition-all duration-500 rounded-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
}

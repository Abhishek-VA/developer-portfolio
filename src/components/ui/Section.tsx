"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "./Button";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 container mx-auto px-6 md:px-12", className)}>
      {title && (
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 luxury-gradient-text inline-block"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { Download, ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm <span className="luxury-gradient-text">Abhishek VA</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-foreground/70 mb-8 font-light"
          >
            Java Developer <span className="text-accent font-medium">&</span> Fintech Specialist
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8"
          >
            MG University MCA 1st Rank Holder (2021-2023)
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building scalable, secure, and high-performance backend systems. Experienced in microservice architecture, payment gateways, and innovative AI solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button onClick={scrollToContact}>
              Connect With Me <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" onClick={() => window.open("/Abhishek_VA_CV_JAVA_3YEAR.pdf", "_blank")}>
              <Download className="w-4 h-4" /> Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

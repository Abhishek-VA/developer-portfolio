"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Server, Database, Shield, Smartphone, Globe, CreditCard } from "lucide-react";

export default function ArchitectureViewer() {
  const nodes = [
    { id: "client", label: "Client App", icon: <Smartphone className="w-6 h-6 text-emerald-400" />, col: "col-start-1 col-end-3", row: "row-start-2" },
    { id: "web", label: "Web Portal", icon: <Globe className="w-6 h-6 text-blue-400" />, col: "col-start-1 col-end-3", row: "row-start-4" },
    { id: "gateway", label: "API Gateway (Apigee)", icon: <Shield className="w-6 h-6 text-purple-400" />, col: "col-start-4 col-end-6", row: "row-start-3" },
    { id: "auth", label: "CIAM / Security", icon: <Shield className="w-6 h-6 text-rose-400" />, col: "col-start-7 col-end-9", row: "row-start-1" },
    { id: "core", label: "Core Banking (Spring Boot)", icon: <Server className="w-6 h-6 text-orange-400" />, col: "col-start-7 col-end-9", row: "row-start-3" },
    { id: "payment", label: "Payment Gateway", icon: <CreditCard className="w-6 h-6 text-green-400" />, col: "col-start-7 col-end-9", row: "row-start-5" },
    { id: "db", label: "MongoDB / Vector DB", icon: <Database className="w-6 h-6 text-cyan-400" />, col: "col-start-10 col-end-12", row: "row-start-3" },
  ];

  return (
    <Section id="architecture" title="System Architecture">
      <Card className="p-8 md:p-12 overflow-x-auto">
        <div className="min-w-[800px] h-[500px] grid grid-cols-12 grid-rows-5 gap-4 relative">
          
          {/* Connection Lines (Simulated using absolute divs) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Client to Gateway */}
            <svg className="w-full h-full absolute top-0 left-0">
              {/* Path from Client to Gateway */}
              <path d="M 16% 30% C 25% 30%, 25% 50%, 33% 50%" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <motion.circle cx="0" cy="0" r="4" fill="#10b981"
                initial={{ offsetDistance: "0%" } as any}
                animate={{ offsetDistance: "100%" } as any}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: 'path("M 16% 30% C 25% 30%, 25% 50%, 33% 50%")' }}
              />

              {/* Path from Web to Gateway */}
              <path d="M 16% 70% C 25% 70%, 25% 50%, 33% 50%" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <motion.circle cx="0" cy="0" r="4" fill="#3b82f6"
                initial={{ offsetDistance: "0%" } as any}
                animate={{ offsetDistance: "100%" } as any}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                style={{ offsetPath: 'path("M 16% 70% C 25% 70%, 25% 50%, 33% 50%")' }}
              />

              {/* Gateway to Auth */}
              <path d="M 42% 50% C 50% 50%, 50% 10%, 58% 10%" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              {/* Gateway to Core */}
              <path d="M 42% 50% L 58% 50%" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <motion.circle cx="0" cy="0" r="4" fill="#f97316"
                initial={{ offsetDistance: "0%" } as any}
                animate={{ offsetDistance: "100%" } as any}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                style={{ offsetPath: 'path("M 42% 50% L 58% 50%")' }}
              />

              {/* Gateway to Payment */}
              <path d="M 42% 50% C 50% 50%, 50% 90%, 58% 90%" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />

              {/* Core to DB */}
              <path d="M 67% 50% L 83% 50%" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <motion.circle cx="0" cy="0" r="4" fill="#06b6d4"
                initial={{ offsetDistance: "0%" } as any}
                animate={{ offsetDistance: "100%" } as any}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
                style={{ offsetPath: 'path("M 67% 50% L 83% 50%")' }}
              />
            </svg>
          </div>

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className={`${node.col} ${node.row} flex flex-col items-center justify-center p-4 glass rounded-xl border border-card-border z-10 hover:border-accent hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-2 bg-background/80 p-3 rounded-full">{node.icon}</div>
              <span className="text-sm font-semibold text-center text-foreground">{node.label}</span>
            </motion.div>
          ))}
          
        </div>
      </Card>
      <p className="text-center text-foreground/60 mt-6 max-w-2xl mx-auto">
        Interactive visualization of a typical fintech microservices architecture, highlighting the flow from client applications through the API Gateway to secure core banking and payment services.
      </p>
    </Section>
  );
}

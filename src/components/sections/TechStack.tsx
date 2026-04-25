"use client";

import Section from "../ui/Section";
import Card from "../ui/Card";
import { Coffee, Leaf, Code2, Database, Network } from "lucide-react";

export default function TechStack() {
  const technologies = [
    { name: "Java", icon: <Coffee className="w-8 h-8" />, color: "text-orange-500" },
    { name: "Spring Boot", icon: <Leaf className="w-8 h-8" />, color: "text-green-500" },
    { name: "Python", icon: <Code2 className="w-8 h-8" />, color: "text-blue-500" },
    { name: "MongoDB", icon: <Database className="w-8 h-8" />, color: "text-green-600" },
    { name: "RESTful APIs", icon: <Network className="w-8 h-8" />, color: "text-cyan-500" },
  ];

  const tools = ["Git", "Jira", "Elastic", "MobaXterm", "Vector DB", "HTML/CSS", "JavaScript"];

  return (
    <Section id="tech-stack" title="Tech Stack">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
        {technologies.map((tech, index) => (
          <Card key={index} delay={index * 0.1} className="flex flex-col items-center justify-center text-center hover:border-accent/50 transition-colors">
            <div className={`mb-4 ${tech.color}`}>
              {tech.icon}
            </div>
            <h4 className="font-bold text-foreground">{tech.name}</h4>
          </Card>
        ))}
      </div>

      <Card delay={0.5} className="mt-8">
        <h3 className="text-xl font-bold mb-6 text-foreground">Tools & Other Skills</h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, index) => (
            <span key={index} className="px-4 py-2 rounded-full glass border border-card-border text-foreground/80 font-medium text-sm hover:border-accent/50 hover:text-accent transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </div>
      </Card>
    </Section>
  );
}

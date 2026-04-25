"use client";

import Section from "../ui/Section";
import Card from "../ui/Card";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Acabes International",
      role: "Software Engineer",
      duration: "July 2023 – Present",
      description: [
        "Developed and deployed scalable microservices using Java, Spring Boot, and RESTful APIs, focusing on fintech applications and third-party integrations.",
        "Achieved code reliability with unit and integration testing using JUnit, ensuring robust integration with MongoDB.",
        "Collaborated closely with cross-functional teams, including CIAM, Cyber Security, Apigee, Middleware, and Business units to ensure seamless integration and enhanced security.",
        "Managed deployments for each release and provided support for Post Implementation Review (PIR) to maintain system stability."
      ]
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l border-card-border ml-4 md:ml-0 md:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-accent hidden md:block" />
              <div className="absolute -left-[21px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-accent md:hidden" />

              <Card delay={index * 0.2}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent" />
                      {exp.role}
                    </h3>
                    <p className="text-lg text-foreground/80 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 bg-background/50 px-3 py-1.5 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i} className="pl-2">
                      <span className="-ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

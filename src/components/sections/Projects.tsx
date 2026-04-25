"use client";

import Section from "../ui/Section";
import Card from "../ui/Card";
import { FolderGit2, Bot, Server, Smartphone, Globe, Workflow } from "lucide-react";

export default function Projects() {
  const fintechProjects = [
    {
      title: "SME Application",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      description: "Financial application for Small and Medium Enterprises.",
      points: [
        "Real-time fund transfers and payments.",
        "Automated employee salary processing.",
        "Maker-Authorizer workflow for secure financial transactions."
      ],
      tags: ["Spring Boot", "Microservices", "Security"]
    },
    {
      title: "Helios Mobile Banking",
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      description: "Mobile banking app by Arab Bank in Jordan.",
      points: [
        "Instant registration and digital account opening.",
        "Developed core microservices for customer account management.",
        "Integrated multiple Middleware, Apigee internal and external APIs."
      ],
      tags: ["Java", "Apigee", "Middleware"]
    },
    {
      title: "DBPM (Digital BPM)",
      icon: <Workflow className="w-6 h-6 text-purple-400" />,
      description: "Converted core banking logic from IBM BPM to DBPM.",
      points: [
        "Encapsulated core business logic and critical banking rules.",
        "Developed and deployed microservices for seamless integration."
      ],
      tags: ["Spring Boot", "IBM BPM", "Banking Operations"]
    },
    {
      title: "EAB (Europe Arab Bank)",
      icon: <Globe className="w-6 h-6 text-orange-400" />,
      description: "Regional banking services for Europe and MENA clients.",
      points: [
        "Resolved production issues and implemented enhancements.",
        "Engaged with stakeholders to align development with business goals."
      ],
      tags: ["Production Support", "Stakeholder Management"]
    }
  ];

  const aiProjects = [
    {
      title: "Arabi Assist (AI Chatbot)",
      icon: <Bot className="w-6 h-6 text-rose-400" />,
      description: "An advanced chatbot developed for Developers, Architects, and Business units.",
      points: [
        "Powered by OpenAI's GPT-4 LLM API.",
        "Generates JUnit test cases, reports, code scoring, and diagrams.",
        "Integrated with Jira, MongoDB, BigQuery, and Vector DB.",
        "Implemented RAG (Retrieval-Augmented Generation) for accuracy.",
        "Custom plugins for IntelliJ and VSCode."
      ],
      tags: ["GPT-4", "Vector DB", "BigQuery", "RAG", "Spring AI"]
    }
  ];

  return (
    <Section id="projects" title="Key Projects">
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-foreground/90 border-b border-card-border pb-4">
          <Bot className="text-rose-400" /> AI Initiatives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiProjects.map((project, index) => (
            <Card key={index} delay={index * 0.1} className="md:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-background/50 border border-card-border">
                  {project.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                  <p className="text-foreground/60 mt-1">{project.description}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 mt-4 text-foreground/80 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="pl-2"><span className="-ml-2">{point}</span></li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-foreground/90 border-b border-card-border pb-4">
          <FolderGit2 className="text-accent" /> Fintech Projects
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fintechProjects.map((project, index) => (
            <Card key={index} delay={0.2 + index * 0.1} className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-background/50 border border-card-border">
                  {project.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                  <p className="text-foreground/60 text-sm mt-1">{project.description}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 mt-4 text-sm text-foreground/80 mb-6 flex-grow">
                {project.points.map((point, i) => (
                  <li key={i} className="pl-2"><span className="-ml-2">{point}</span></li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

    </Section>
  );
}

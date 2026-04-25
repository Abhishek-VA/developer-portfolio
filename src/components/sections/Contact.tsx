"use client";

import Section from "../ui/Section";
import Card from "../ui/Card";
import { Mail, Phone } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl text-foreground/70 mb-12">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex flex-col items-center justify-center p-8 hover:border-accent/50 transition-colors">
            <Mail className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href="mailto:abhishekva13@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">
              abhishekva13@gmail.com
            </a>
          </Card>

          <Card className="flex flex-col items-center justify-center p-8 hover:border-accent/50 transition-colors">
            <Phone className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <a href="tel:+918592832676" className="text-foreground/70 hover:text-blue-400 transition-colors">
              +91 8592832676
            </a>
          </Card>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <a href="https://www.linkedin.com/in/abhishek-v-a-0298aa201" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:text-accent hover:border-accent transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="https://github.com/Abhishek-VA" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:text-accent hover:border-accent transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </Section>
  );
}

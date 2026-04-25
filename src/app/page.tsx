import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      
      <footer className="py-8 text-center text-foreground/50 text-sm border-t border-card-border mt-20">
        <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        <p className="mt-2">© {new Date().getFullYear()} Abhishek VA. All rights reserved.</p>
      </footer>
    </main>
  );
}

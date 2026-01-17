import Hero from "../sections/Hero";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import TechStackSection from "../sections/TechStackSection";
import { Header } from "../components/Header";

export default function HomePage() {
  return (
    <div id="top" className="relative min-h-[100svh] bg-transparent text-text">
      <Header />

      <main className="relative z-10">
        <Hero />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

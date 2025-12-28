import Hero from "../sections/Hero";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import { Header } from "../components/Header";

export default function HomePage() {
  return (
    <div id="top" className="relative z-10 min-h-screen text-text">
      <Header />

      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}


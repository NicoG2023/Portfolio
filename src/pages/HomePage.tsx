import Hero from "../sections/Hero";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import { Header } from "../components/Header";
import { GlobalBackground } from "../styles/GlobalBackground";

export default function HomePage() {
  return (
    <div id="top" className="relative min-h-screen text-text bg-bg">
      <GlobalBackground />

      <Header />

      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

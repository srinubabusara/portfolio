import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExpertiseSection from "@/components/portfolio/ExpertiseSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import DocumentationSection from "@/components/portfolio/DocumentationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <DocumentationSection />
        <ContactSection />
      </main>
      <Footer />
      
    </div>
  );
};

export default Index;

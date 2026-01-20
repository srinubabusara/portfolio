import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Presentation, BookOpen, FileCode } from "lucide-react";

const documentTypes = [
  {
    icon: FileText,
    title: "Project Proposals",
    description: "Comprehensive technical and business proposals tailored for stakeholder approval and project kickoff."
  },
  {
    icon: BookOpen,
    title: "Technical Manuals",
    description: "Detailed technical documentation, API references, and developer guides for seamless knowledge transfer."
  },
  {
    icon: Presentation,
    title: "Presentations & Brochures",
    description: "High-impact slide decks for executive briefings, project updates, and technical demonstrations."
  },
  {
    icon: FileCode,
    title: "User Manuals",
    description: "User-friendly documentation with step-by-step guides, tutorials, and FAQs for end-users."
  }
];

const DocumentationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="documentation" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Documentation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional{" "}
            <span className="text-gradient">Communication</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong expertise in crafting clear, professional documentation for all stakeholders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {documentTypes.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <doc.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, Palette, Database } from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "AI & LLM Workflow Integration",
    items: [
      "LLM prompt engineering & system instruction design",
      "Generative AI API integration",
      "AI-powered assistants, chatbots, auto-document generation",
      "Intelligent UI automation using AI workflows"
    ]
  },
  {
    icon: Globe,
    title: "Full Stack Development",
    items: [
      "React.js with reusable components & hooks",
      "Node.js, Express.js, Java Spring Boot",
      "RESTful API design & secure middleware handling",
      "End-to-end client–server architecture"
    ]
  },
  {
    icon: Palette,
    title: "Frontend & UI/UX Engineering",
    items: [
      "Responsive UI with React, Tailwind, Bootstrap",
      "Advanced form UX, validations & accessibility",
      "Design consistency, UI bug fixing & optimization",
      "Figma & Photoshop driven UI workflows"
    ]
  },
  {
    icon: Database,
    title: "Backend & Database Systems",
    items: [
      "Modular backend service architecture",
      "MongoDB, PostgreSQL & SQL schema design",
      "Multi-layer validation & performance optimization",
      "Secure data management & API security"
    ]
  }
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03)_0%,transparent_70%)]" />
      
      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Specialized in Modern{" "}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning AI integration, full-stack development, 
            and enterprise-grade architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground pt-3">
                    {area.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-accent mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

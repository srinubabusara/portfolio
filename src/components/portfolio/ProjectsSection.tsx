import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Document Management System",
    description: "Enterprise document management with AI auto-classification, intelligent search, and automated summarization for a multinational corporation.",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI API", "AWS"],
    aiFeatures: ["Auto-classification", "Smart Search", "Document Summarization"],
    featured: true
  },
  {
    title: "E-Commerce Platform with AI Recommendations",
    description: "Full-stack e-commerce solution with AI-driven product recommendations, dynamic pricing, and personalized user experiences.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "TensorFlow"],
    aiFeatures: ["Product Recommendations", "Dynamic Pricing"],
    featured: true
  },
  {
    title: "Healthcare Patient Portal",
    description: "Secure patient management system with appointment scheduling, telemedicine integration, and automated health insights.",
    techStack: ["React", "Express.js", "MongoDB", "Socket.io"],
    aiFeatures: ["Health Insights", "Symptom Analysis"],
    featured: false
  },
  {
    title: "Enterprise Resource Planning (ERP) System",
    description: "Comprehensive ERP solution for Saudi Arabian client featuring inventory, HR, finance modules with Arabic localization.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Redis"],
    aiFeatures: null,
    featured: false
  },
  {
    title: "AI Chatbot Platform",
    description: "Multi-tenant chatbot platform with customizable AI agents, knowledge base integration, and analytics dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "LangChain", "GPT-4"],
    aiFeatures: ["Custom AI Agents", "Knowledge Base", "Analytics"],
    featured: true
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "High-performance analytics dashboard with real-time data streaming, interactive visualizations, and automated reporting.",
    techStack: ["React", "D3.js", "Express.js", "PostgreSQL", "WebSocket"],
    aiFeatures: ["Predictive Analytics"],
    featured: false
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Portfolio
          </span>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade solutions powered by cutting-edge technology and AI integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-accent text-white text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* AI Features */}
                {project.aiFeatures && (
                  <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-2">
                      <Sparkles className="w-3 h-3" />
                      AI Features
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.aiFeatures.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-0.5 bg-primary/10 rounded text-xs text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Actions */}
                <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Brain, Database, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Code2,
    technologies: [
      "React.js", "TypeScript", "ECMAScript", "JavaScript", "HTML5", "CSS3", 
      "Tailwind CSS", "Bootstrap", "SCSS", "LESS", "SASS", "Media Queries", "jQuery", "EJS"
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      "Node.js", "Express.js", "Java Spring Boot", "REST APIs"
    ],
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500"
  },
  {
    title: "AI & Automation",
    icon: Brain,
    technologies: [
      "LLM Prompt Engineering", "Generative AI APIs", "AI Workflow Design", "Smart Assistants", "Auto-Document Generation"
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-400",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500"
  },
  {
    title: "Database",
    icon: Database,
    technologies: [
      "MongoDB", "PostgreSQL", "SQL"
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    technologies: [
      "Git", "SVN", "WordPress", "Figma", "Photoshop", "Media Queries"
    ],
    gradient: "from-indigo-500 via-violet-500 to-purple-400",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500"
  }
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl translate-x-1/2" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Tech Stack
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technologies I{" "}
            <span className="relative">
              <span className="text-gradient">Work With</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A robust technology stack built over a decade of professional experience,
            <span className="text-foreground font-medium"> powering enterprise-grade solutions worldwide.</span>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/20">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Category Header */}
                  <div className="lg:w-56 flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center`}
                      >
                        <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.gradient} mt-1`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.03 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`
                          relative px-4 py-2.5 rounded-xl text-sm font-medium cursor-default
                          bg-secondary/80 text-foreground border border-border/50
                          hover:border-transparent hover:text-white
                          transition-all duration-300 overflow-hidden group/tech
                        `}
                      >
                        <span className={`
                          absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 
                          group-hover/tech:opacity-100 transition-opacity duration-300
                        `} />
                        <span className="relative z-10">{tech}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { number: "30+", label: "Technologies" },
            { number: "10+", label: "Years Mastery" },
            { number: "100%", label: "Code Quality" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.number}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;

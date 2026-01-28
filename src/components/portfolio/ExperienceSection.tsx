import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, Building2, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Senior AI Engineer | LLM Workflow Designer",
    subtitle: "MERN Stack & Generative AI Integration Expert",
    company: "Advent Global Solutions Pvt. Ltd.",
    duration: "Mar 2024 - Present",
    location: "Hyderabad, Telangana, India",
    workType: "On-site",
   highlights: [
      "AI & LLM workflow design with Generative AI integration",
      "Cross-functional collaboration with regional stakeholders",
      "Enterprise-level LMS development",
    ],
    skills: ["Generative AI Integration", "Java Spring Boot", "React.js", "Node.js", "Typescript","PostgreSQL","Bootstrap","CSS3"],
    current: true
  },
  {
    title: "Senior Software Developer",
    company: "DIGIKS INFOTECH PRIVATE LIMITED",
    duration: "Jul 2022 - Feb 2024",
    location: "Hyderabad, Telangana, India",
    workType: "On-site",
    highlights: [
      "Full Stack Development with MERN Stack",
      "React-based dynamic UI development",
      "RESTful API design and implementation",
      "Database management with PostgreSQL"
    ],
   skills: ["React.js", "Node.js", "Typescript","JavaScript","JQuery","PostgreSQL","Bootstrap","HTML5/CSS3","MediaQueries"],
    current: false
  },
  {
    title: "Software Developer",
    company: "National Informatics Centre, Govt of India",
    duration: "Mar 2015 - Jun 2022",
    location: "Hyderabad Area, India",
    workType: "On-site",
    highlights: [
      "Enterprise-grade government applications",
      "Frontend development with responsive UI",
      "Database-driven application development",
      "Cross-browser compatibility solutions"
    ],
    skills: ["React.js", "Bootstrap", "HTML5", "jQuery", "JavaScript", "CSS3", "MediaQueries", "PostgreSQL", "WordPress"],
    current: false
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.02)_25%,transparent_25%,transparent_50%,hsl(var(--primary)/0.02)_50%,hsl(var(--primary)/0.02)_75%,transparent_75%,transparent)] bg-[length:40px_40px]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl" />
      
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
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Work Experience
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Companies I've{" "}
            <span className="text-gradient">Worked With</span>
          </h2>
          <p className="text-xl text-gradient font-semibold mb-4">
            10+ Years of Professional Excellence
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A decade of delivering enterprise solutions across government and private sectors,
            with international project experience in Saudi Arabia.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className={`w-4 h-4 rounded-full ${
                      exp.current 
                        ? 'bg-gradient-primary shadow-glow' 
                        : 'bg-primary/60 border-2 border-background'
                    }`}
                  />
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
                
                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 border ${
                      exp.current ? 'border-primary/30 bg-primary/5' : 'border-border/50'
                    }`}
                  >
                    {/* Current badge */}
                    {exp.current && (
                      <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-primary text-primary-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          Currently Working
                        </span>
                      </div>
                    )}
                    
                    {/* Header */}
                    <div className={`flex flex-col gap-3 mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                          {exp.title}
                        </h3>
                        {exp.subtitle && (
                          <p className="text-sm text-primary font-medium mt-1">{exp.subtitle}</p>
                        )}
                      </div>
                      
                      <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="text-lg font-semibold text-foreground">{exp.company}</span>
                      </div>
                    </div>
                    
                    {/* Meta info */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location} · {exp.workType}
                      </span>
                    </div>
                    
                    
                    {/* Highlights */}
                    <div className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <div 
                          key={hIndex} 
                          className={`flex items-center gap-2 text-sm text-foreground ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "3", label: "Companies" },
            { number: "10+", label: "Years Experience" },
            { number: "2", label: "Countries" },
            { number: "50+", label: "Projects Delivered" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

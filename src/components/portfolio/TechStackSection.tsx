import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaRobot, FaDatabase, FaTools } from "react-icons/fa"; // React Icons

// Tech Categories Array
const techCategories = [
  {
    title: "Frontend",
    icon: FaReact, // React Icon
    technologies: [
      "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
      "Tailwind CSS", "Bootstrap", "SCSS", "LESS", "SASS", "jQuery", "EJS"
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Backend",
    icon: FaNodeJs, // Node.js Icon
    technologies: ["Node.js", "Express.js", "Java Spring Boot", "REST APIs"],
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-500",
  },
  {
    title: "AI & Automation",
    icon: FaRobot, // AI/Automation Icon
    technologies: [
      "LLM Prompt Engineering", "Generative AI APIs",
      "AI Workflow Design", "Smart Assistants", "Auto-Document Generation"
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-400",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Database",
    icon: FaDatabase, // Database Icon
    technologies: ["MongoDB", "PostgreSQL", "SQL"],
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-500",
  },
  {
    title: "Tools & Platforms",
    icon: FaTools, // Tools Icon
    technologies: ["Git", "SVN", "WordPress", "Figma", "Photoshop", "Media Queries"],
    gradient: "from-indigo-500 via-violet-500 to-purple-400",
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-500",
  },
];

// Main TechStack Section Component
const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      
      {/* Decorative Blurred Circles */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-pink-300/30 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-300/20 to-cyan-200/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 border border-blue-200">
            <FaReact className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Tech Stack</span>
          </div>
          
                   
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
        {/* Tech Categories Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 rounded-xl ${category.iconBg} flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  <div className={`h-1 w-16 rounded-full mt-1 bg-gradient-to-r ${category.gradient}`} />
                </div>
              </div>

              {/* Tech List */}
              <div className="flex flex-wrap gap-3 mt-4">
                {category.technologies.map((tech, tIdx) => (
                  <motion.span
                    key={tIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: idx * 0.1 + tIdx * 0.03 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-800 border border-gray-200 bg-white/50 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:text-white cursor-default transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-10"
        >
          {[
            { number: "30+", label: "Technologies" },
            { number: "10+", label: "Years Mastery" },
            { number: "100%", label: "Code Quality" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                {stat.number}
              </div>
              <div className="mt-1 text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;

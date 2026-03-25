import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaRobot,
  FaDatabase,
  FaTools,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiAdobephotoshop,
  SiGithubactions,
  SiAmazondynamodb,
  SiAmazonapigateway,
  SiAwslambda,
} from "react-icons/si";

// 🔹 Map tech → icon
const techIconMap: Record<string, any> = {
  "React.js": FaReact,
  TypeScript: SiTypescript,
  JavaScript: FaJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  SCSS: SiSass,
  LESS: SiSass,
  SASS: SiSass,
  jQuery: SiJquery,
  EJS: FaJs,

  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "Java Spring Boot": SiSpringboot,
  "REST APIs": FaNodeJs,

  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  SQL: FaDatabase,

  Git: FaGitAlt,
  SVN: FaGitAlt,
  WordPress: FaTools,
  Figma: SiFigma,
  Photoshop: SiAdobephotoshop,

  "AWS Lambda": SiAwslambda,
  "Amazon API Gateway": SiAmazonapigateway,
  "Amazon DynamoDB": SiAmazondynamodb,
  "GitHub Actions (CI/CD)": SiGithubactions,
};

// Tech Categories
const techCategories = [
  {
    title: "Frontend",
    icon: FaReact,
    technologies: [
      "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
      "Tailwind CSS", "Bootstrap", "SCSS", "LESS", "SASS", "jQuery", "EJS",
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    technologies: ["Node.js", "Express.js", "Java Spring Boot", "REST APIs"],
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    title: "AI & Automation",
    icon: FaRobot,
    technologies: [
      "LLM Prompt Engineering", "Generative AI APIs", "AI Workflow Design",
      "Smart Assistants", "Auto-Document Generation",
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-400",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    title: "Database",
    icon: FaDatabase,
    technologies: ["MongoDB", "PostgreSQL", "SQL"],
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    technologies: ["Git", "SVN", "WordPress", "Figma", "Photoshop", "Media Queries"],
    gradient: "from-indigo-500 via-violet-500 to-purple-400",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
  },
  {
    title: "Cloud & Serverless",
    icon: FaCloud,
    technologies: ["AWS Lambda", "Amazon API Gateway", "Amazon DynamoDB", "GitHub Actions (CI/CD)"],
    gradient: "from-sky-500 via-blue-500 to-indigo-400",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-500",
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative Blurred Background Elements */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-0 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-3xl" />

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
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -10 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm border border-white rounded-3xl p-5 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl ${category.iconBg} ${category.iconColor} shadow-inner`}>
                  <category.icon className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 tracking-tight">{category.title}</h3>
                  <div className={`h-1 w-12 mt-1 rounded-full bg-gradient-to-r ${category.gradient}`} />
                </div>
              </div>

              {/* Tech Grid Items */}
              <div className="grid grid-cols-2 gap-x-1 gap-y-2">
                {category.technologies.map((tech, i) => {
                  const Icon = techIconMap[tech] || FaTools;

                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-white shadow-sm transition-all duration-200 group"
                    >
                      <div className={` rounded-lg bg-gray-50 group-hover:bg-white ${category.iconColor} transition-colors`}>
                        <Icon className="text-base opacity-80 group-hover:opacity-100" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, MapPin, Globe } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    "10+ years of hands-on full-stack development experience",
    "On-site client engagements in Saudi Arabia",
    "AI & LLM workflow design specialist",
    "Modern frontend & backend architecture expert"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-cyan-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-primary/20" />
              <div className="absolute inset-8 rounded-full border border-primary/30" />
              
              {/* Main visual */}
              <div className="absolute inset-12 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
                <div className="text-center text-primary-foreground p-6">
                  <div className="text-6xl font-bold mb-2">10+</div>
                  <div className="text-lg font-medium opacity-90">Years of</div>
                  <div className="text-lg font-medium opacity-90">Excellence</div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 glass-card rounded-xl p-4 shadow-lg"
              >
                <MapPin className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs font-medium">&nbsp; India &nbsp; &nbsp; &nbsp;</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-2 glass-card rounded-xl p-4 shadow-lg"
              >
                <Globe className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs font-medium">Saudi Arabia</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Building Enterprise Solutions with{" "}
              <span className="text-gradient">AI-Powered</span> Intelligence
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
              Senior Software Developer with 10+ years of hands-on experience in full-stack 
              development and enterprise-grade applications. Experienced in on-site client 
              engagements in Saudi Arabia, delivering robust, scalable, and secure systems.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
              Specialized in AI & LLM workflow design, modern frontend engineering, and 
              backend system architecture. I transform complex business requirements into 
              elegant, performant solutions.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

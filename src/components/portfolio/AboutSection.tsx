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
  <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
    
    {/* 1. Outer Orbiting Ring (Dashed) */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200/50" 
    />
    
    {/* 2. Floating Background Glows */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 blur-[60px] rounded-full animate-pulse" />
    <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/20 blur-[60px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

    {/* 3. Middle Pulsing Glass Ring */}
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-12 rounded-full bg-gradient-to-tr from-blue-100/20 to-purple-100/20 border border-white/50 shadow-inner" 
    />
    
    {/* 4. Main Center Identity Circle */}
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="relative z-10 w-80 h-80 rounded-full bg-white shadow-[0_20px_50px_rgba(31,38,135,0.15)] flex items-center justify-center border-[6px] border-white overflow-hidden"
    >
      {/* Internal Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500" />
      
      <div className="relative z-20 text-center text-white">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="text-7xl font-black tracking-tighter"
        >
          10<span className="text-3xl text-cyan-300">+</span>
        </motion.div>
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-70 mt-[-5px]">Years of</div>
        <div className="text-xl font-extrabold tracking-tight">Excellence</div>
      </div>

      {/* Subtle shine effect that passes over the circle */}
      <motion.div 
        animate={{ x: [-150, 450] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
        className="absolute top-0 left-0 w-24 h-full bg-white/20 skew-x-[25deg] blur-sm"
      />
    </motion.div>
    
    {/* 5. Floating Badge: India (Saffron/Green Theme) */}
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      className="absolute top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 border border-orange-100"
    >
      <div className="flex flex-col gap-0.5">
        <div className="w-4 h-1 bg-[#FF9933] rounded-full" /> {/* Saffron */}
        <div className="w-4 h-1 bg-[#138808] rounded-full" /> {/* Green */}
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-orange-600" />
        <span className="text-sm font-bold text-slate-800 tracking-tight">India</span>
      </div>
    </motion.div>
    
    {/* 6. Floating Badge: Saudi Arabia (Green Theme) */}
    <motion.div
      animate={{ y: [10, -10, 10] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 border border-green-100"
    >
      <div className="bg-emerald-600 p-1.5 rounded-lg shadow-inner shadow-emerald-700/20">
        <Globe className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm font-bold text-slate-800 tracking-tight whitespace-nowrap">Saudi Arabia</span>
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

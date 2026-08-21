import { useState } from "react"; // Added for modal state
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  X,
  ExternalLink,
  Box,
  Code2,
  Layers,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog"; // Ensure radix-ui/react-dialog is installed

const PROJECTS = [
  "Learning Management System (LMS)",
  "SensuQ",
  "Event Management System",
  "HRMS for TMDCL",
  "Digital Health Services",
  "Pharmacy Council of India",
  "Supply Chain Management",
  "Paperless office management",
  "dAkademy",
  "eLearning",
  "Sakal Jobs",
  "Digiks",
  "Track and Trace",
  "ITArctica",
  "TS Raj Bhavan",
  "Chancellor Connects of Alumni",
  "AIIMS BiBi-Nagar",
  "NIPER Hyderabad",
  "JNTU Hyderabad",
  "Center for Data Governance",
  "Sports Authority of Telangana State",
  "Panchayat Raj",
  "Aarogya Lakshmi",
  "Vidyawaan",
];

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements - Kept as per your code */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-accent/10 to-purple-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Innovative Solutions, Seamless Experiences
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Senior Software Developer</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Workflow Designer
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            10+ Years of Experience in Full Stack Development, MERN Stack &
            GenAI Developer | Vercel | AWS Lambda | API Gateway | IAM | DynamoDB
            | GitHub Copilot | GitHub Actions CI/CD
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-muted mb-10 max-w-3xl mx-auto"
          >
            Specializing in designing and delivering scalable enterprise
            solutions that combine AI-driven intelligence with exceptional,
            user-centric interfaces
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Added onClick to open modal */}
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => setIsOpen(true)}
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              {
                value: "10+",
                label: "Years of Hands-on Development Experience",
              },
              { value: "50+", label: "Projects Designed, Built, and Deployed" },
              { value: "20+", label: "Enterprise Clients Collaborated With" },
              {
                value: "100%",
                label: "Client Satisfaction Through Quality Delivery",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* --- NEW BEAUTIFUL MODAL --- */}
      <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

/* --- SUB-COMPONENT: BEAUTIFUL MODAL --- */

const ProjectModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        {/* Overlay - Fixed Centering Wrapper */}
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Modal Content */}
          <Dialog.Content asChild>
            <div
              className="
                relative w-full max-w-5xl max-h-[90vh]
                rounded-3xl bg-white border border-slate-200
                shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]
                flex flex-col overflow-hidden focus:outline-none
              "
            >
              {/* Animated Background Blobs (Tailwind Only) */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between px-6 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-md">
                <div>
                  <Dialog.Title className="text-2xl font-bold text-slate-900">
                    Project Portfolio
                  </Dialog.Title>
                  <Dialog.Description className="text-sm font-medium text-blue-600 uppercase tracking-wider mt-1">
                    Enterprise & Government Solutions
                  </Dialog.Description>
                </div>

                <Dialog.Close asChild>
                  <button
                    className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </Dialog.Close>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar bg-slate-50/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROJECTS.map((project, idx) => (
                    <div
                      key={project}
                      className="
                        group flex items-center gap-4 p-4
                        rounded-2xl border border-slate-200
                        bg-white hover:border-blue-400
                        hover:shadow-md transition-all duration-300
                      "
                    >
                      {/* Icon with Dynamic Tailwind Gradients */}
                      <div
                        className={`
                        w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm
                        ${
                          idx % 3 === 0
                            ? "bg-gradient-to-br from-blue-500 to-cyan-400"
                            : idx % 3 === 1
                              ? "bg-gradient-to-br from-indigo-500 to-purple-500"
                              : "bg-gradient-to-br from-emerald-500 to-teal-400"
                        }
                      `}
                      >
                        {idx % 3 === 0 ? (
                          <Box className="w-6 h-6" />
                        ) : idx % 3 === 1 ? (
                          <Code2 className="w-6 h-6" />
                        ) : (
                          <Layers className="w-6 h-6" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-slate-900 font-bold truncate group-hover:text-blue-700 transition-colors">
                          {project}
                        </h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">
                          Enterprise Implementation
                        </p>
                      </div>

                      <ExternalLink className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-blue-500 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-4 border-t border-slate-100 bg-white flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-500 italic">
                  Total {PROJECTS.length} Systems Cataloged
                </p>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default HeroSection;

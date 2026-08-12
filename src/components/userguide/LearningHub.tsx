import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  ArrowRight,
  Code2,
  Database,
  Cloud,
  GitBranch,
  Layers,
  BookOpen,
  Sparkles,
  Terminal,
  Globe,
  Cpu,
  Server,
  Braces,
  Palette,
  Zap,
  Boxes,
  MessageSquareText,
  ChevronRight,
} from "lucide-react";

import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";

type Technology = {
  name: string;
  slug: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  gradient: string;
};

const technologies: Technology[] = [
  {
    name: "React.js",
    slug: "react",
    description: "Build modern, fast and interactive user interfaces.",
    category: "Frontend",
    icon: <Code2 size={28} />,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    gradient: "from-cyan-400 to-blue-600",
    tutorialLink: "/react",                     
    iqsLink: "/react-question_answers",   
  },
  {
    name: "HTML5",
    slug: "html",
    description: "Learn the foundation of modern web applications.",
    category: "Frontend",
    icon: <Globe size={28} />,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    gradient: "from-orange-400 to-red-600",
  },
  {
    name: "CSS3",
    slug: "css",
    description: "Create beautiful, responsive and modern interfaces.",
    category: "Frontend",
    icon: <Palette size={28} />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    name: "JavaScript",
    slug: "javascript",
    description: "Master the programming language of the web.",
    category: "Frontend",
    icon: <Braces size={28} />,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    description: "Build scalable applications with type-safe JavaScript.",
    category: "Frontend",
    icon: <Code2 size={28} />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    gradient: "from-blue-500 to-blue-800",
  },
  {
    name: "Tailwind CSS",
    slug: "tailwind-css",
    description: "Build beautiful interfaces using utility-first CSS.",
    category: "Frontend",
    icon: <Layers size={28} />,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    gradient: "from-cyan-400 to-teal-600",
  },
  {
    name: "Node.js",
    slug: "nodejs",
    description: "Build powerful and scalable backend applications.",
    category: "Backend",
    icon: <Server size={28} />,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    gradient: "from-green-400 to-emerald-700",
  },
  {
    name: "Express.js",
    slug: "express",
    description: "Create fast and flexible APIs with Node.js.",
    category: "Backend",
    icon: <Zap size={28} />,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    gradient: "from-slate-500 to-slate-900",
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    description: "Learn modern NoSQL database development.",
    category: "Database",
    icon: <Database size={28} />,
    iconBg: "bg-green-50",
    iconColor: "text-green-700",
    gradient: "from-green-400 to-green-800",
  },
  {
    name: "PostgreSQL",
    slug: "postgresql",
    description: "Master powerful relational database development.",
    category: "Database",
    icon: <Database size={28} />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    gradient: "from-blue-400 to-indigo-700",
  },
  {
    name: "MySQL",
    slug: "mysql",
    description: "Learn SQL and relational database concepts.",
    category: "Database",
    icon: <Database size={28} />,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    gradient: "from-sky-400 to-blue-700",
  },
  {
    name: "AWS",
    slug: "aws",
    description: "Learn cloud computing and AWS services.",
    category: "Cloud",
    icon: <Cloud size={28} />,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    gradient: "from-orange-400 to-amber-600",
  },
  {
    name: "Git",
    slug: "git",
    description: "Master version control and source management.",
    category: "DevOps",
    icon: <GitBranch size={28} />,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "GitHub",
    slug: "github",
    description: "Collaborate and manage repositories effectively.",
    category: "DevOps",
    icon: <GitBranch size={28} />,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    gradient: "from-slate-600 to-black",
  },
  {
    name: "Docker",
    slug: "docker",
    description: "Learn containers and modern application deployment.",
    category: "DevOps",
    icon: <Boxes size={28} />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    gradient: "from-blue-400 to-cyan-600",
  },
  {
    name: "AI & LLM",
    slug: "ai-llm",
    description: "Explore AI, LLMs, prompts and intelligent applications.",
    category: "AI",
    icon: <Cpu size={28} />,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    gradient: "from-purple-500 to-pink-600",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
  "AI",
];

const SoftwareLearningHub: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => {
      const matchesSearch =
        tech.name.toLowerCase().includes(search.toLowerCase()) ||
        tech.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || tech.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

const navigate = useNavigate();

const openTutorial = (link: string) => {
  navigate(link); 
};

const openInterview = (link: string) => {
  navigate(link);
};

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes move-around {
          0% { transform: translate(0, 0); }
          25% { transform: translate(30px, -20px); }
          50% { transform: translate(-10px, 30px); }
          75% { transform: translate(20px, -10px); }
          100% { transform: translate(0, 0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 10s ease infinite;
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-move-around { animation: move-around 15s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; }
        }
      `}</style>

      <Navigation />

      <main>
        {/* =====================================================
            HERO – Animated Background with Floating Shapes
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          {/* Base gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-blue-100/20 to-purple-100/20 animate-gradient-shift" />

          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-cyan-400/20 blur-2xl animate-float" />
            <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-blue-400/15 blur-3xl animate-float-reverse" />
            <div
              className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-purple-400/20 blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div className="absolute top-20 left-1/2 w-16 h-16 border-4 border-cyan-300/30 rounded-2xl animate-spin-slow" />
            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-blue-300/30 rounded-full animate-move-around" />
            <div
              className="absolute top-2/3 left-10 w-10 h-10 bg-cyan-300/20 rounded-full blur-xl animate-float-reverse"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="absolute top-1/2 left-3/4 w-6 h-6 bg-purple-300/30 rotate-45 animate-float"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 text-center sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-200/60 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm transition-all hover:shadow-md">
              <Sparkles size={16} className="animate-float" />
              Your Developer Learning Platform
            </div>

            <h1 className="mx-auto max-w-5xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Software
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-shimmer">
                {" "}
                Learning Hub
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Learn technologies, practice real-world examples and prepare for
              technical interviews — all in one place.
            </p>
          </div>
        </section>

        {/* =====================================================
            CATEGORIES + SEARCH
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 lg:px-8 py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                      : "border-slate-200 bg-white/80 backdrop-blur-sm text-slate-600 hover:border-cyan-300 hover:bg-cyan-50/60 hover:text-cyan-700 hover:shadow-md hover:scale-105"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="w-full lg:w-auto lg:min-w-[380px]">
              <div className="group flex items-center rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-400/20 focus-within:shadow-lg">
                <Search
                  size={20}
                  className="ml-3 shrink-0 text-slate-400 transition-colors group-focus-within:text-cyan-600"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search React, JavaScript, AWS..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-sm"
                />

                <button
                  type="button"
                  className="hidden rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-600/30 hover:scale-105 sm:block"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY CARDS – Icon + Title Side by Side
        ====================================================== */}
        <section
          id="technologies"
          className="mx-auto max-w-7xl px-5 py-16 lg:px-8"
        >
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cyan-600">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Explore Technologies
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Learn & Prepare
              </h2>

              <p className="mt-3 text-slate-500">
                Tutorials, interview questions and quick references for every
                technology.
              </p>
            </div>

            <div className="hidden text-sm text-slate-400 sm:block">
              {filteredTechnologies.length} Technologies
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTechnologies.map((tech, index) => (
              <article
                key={tech.slug}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)] hover:border-cyan-200/70"
              >
                {/* Top gradient bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${tech.gradient} animate-shimmer`}
                />

                <div className="p-6">
                  {/* =================================================
                      Header: Icon (left) + Title (right)
                  ================================================== */}
                  <div className="flex items-start gap-4">
                    {/* Icon with glow */}
                    <div
                      className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tech.iconBg} ${tech.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.gradient} opacity-0 blur-xl transition group-hover:opacity-30 group-hover:blur-2xl`}
                      />
                      <div className="relative icon-float">{tech.icon}</div>
                    </div>

                    {/* Title + category */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-600 leading-tight">
                        {tech.name}
                      </h3>
                      <span className="inline-block mt-1 rounded-full bg-slate-50/80 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold text-slate-500 border border-slate-200/50">
                        {tech.category}
                      </span>
                    </div>

                    {/* Index number */}
                    <span className="text-xs font-bold text-slate-200 group-hover:text-slate-400 transition-colors shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {tech.description}
                  </p>

                  {/* Two Buttons – Main & Sub */}
                  <div className="mt-5 space-y-2.5">
                    {/* Main: Start Tutorial */}
                    <button
                      type="button"
                      onClick={() => openTutorial(tech.tutorialLink)}
                      className={`button-shimmer flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${tech.gradient} px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:brightness-105 active:scale-[0.98] relative overflow-hidden`}
                    >
                      <BookOpen size={16} />
                      Start Tutorial
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    {/* Sub: Interview Q&A */}
                    <button
                      type="button"
                     onClick={() => openInterview(tech.iqsLink)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-purple-300 hover:bg-purple-50/60 hover:text-purple-700 hover:shadow-md active:scale-[0.98]"
                    >
                      <MessageSquareText
                        size={16}
                        className="transition-transform group-hover:rotate-6"
                      />
                      Interview Q&A
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            LEARNING PATH
        ====================================================== */}
        <section className="border-y border-slate-100 bg-slate-50/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Simple Learning Process
              </div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Learn. Practice. Get Interview Ready.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Learn",
                  text: "Understand concepts from fundamentals to advanced topics.",
                  icon: <BookOpen size={24} />,
                },
                {
                  number: "02",
                  title: "Practice",
                  text: "Work through practical examples and real-world scenarios.",
                  icon: <Terminal size={24} />,
                },
                {
                  number: "03",
                  title: "Interview",
                  text: "Practice technical questions and prepare for interviews.",
                  icon: <MessageSquareText size={24} />,
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-cyan-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
                      <div className="icon-float">{item.icon}</div>
                    </div>
                    <span className="text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-14 text-center sm:px-12 animate-gradient-shift">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/30 blur-3xl animate-pulse-soft" />
            <div
              className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/30 blur-3xl animate-pulse-soft"
              style={{ animationDelay: "1s" }}
            />

            <div className="relative">
              <Sparkles
                size={30}
                className="mx-auto text-cyan-400 animate-float"
              />

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Ready to level up your skills?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Pick a technology, learn the concepts, practice examples and
                prepare for your next technical interview.
              </p>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("technologies")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-cyan-50 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95"
              >
                Explore Technologies
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SoftwareLearningHub;

import React, { useState } from 'react';
import { 
  Code2, Database, Layout, Smartphone, ClipboardCheck, 
  Cloud, BrainCircuit, ShieldAlert, Globe, Zap, 
  MapPin, Briefcase, TrendingUp, X, Layers, Users,
  Sparkles, CheckCircle2, ArrowRight, MousePointer2, Rocket,Target,
} from 'lucide-react';
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
// Import Local Images
import imgFrontend from '../../assets/images/imgFrontend.png';
import imgBackend from '../../assets/images/imgBackend.avif';
import imgFullstack from '../../assets/images/imgFullstack.avif';
import imgMobile from '../../assets/images/imgMobile.avif';
import imgTesting from '../../assets/images/imgTesting.avif';
import imgDevops from '../../assets/images/imgDevops.avif';
import imgAI from '../../assets/images/imgAI.avif';
import imgSecurity from '../../assets/images/imgSecurity.avif';
import imgNetworking from '../../assets/images/imgNetworking.avif';
import imgPega from '../../assets/images/imgPega.avif';
import imgGIS from '../../assets/images/imgGIS.avif';
import imgNonIT from '../../assets/images/imgNonIT.jpg';
import ssbbg from '../../assets/images/sbg1.png';

// --- Types ---
interface SalaryRow {
  level: string;
  amount: string;
}

interface CourseSection {
  title: string;
  items: string[];
}

interface TechDomain {
  id: number;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  image: string;           // Now local imported image
  color: string;
  sections: CourseSection[];
  salaries: SalaryRow[];
  note?: string;
}

// --- Data with Local Images ---
const techDomains: TechDomain[] = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8" />,
    shortDesc: "Crafting visual experiences using modern JS frameworks and CSS.",
    image: imgFrontend,
    color: "from-blue-500 to-cyan-400",
    sections: [
      { title: "Core Tech", items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
      { title: "Styling", items: ["Bootstrap", "Tailwind CSS", "Sass/SCSS", "Material UI"] },
      { title: "Frameworks", items: ["React.js", "Angular", "Vue.js", "Next.js", "Nuxt.js"] },
      { title: "Advanced", items: ["TypeScript", "Vite", "GraphQL", "WebSockets"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹20,000 – ₹35,000" },
      { level: "2–4 Years", amount: "₹40,000 – ₹80,000" },
      { level: "5+ Years", amount: "₹1.2L – ₹3L+" }
    ],
    note: "🔥 React + TypeScript developers earn significantly more."
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Database className="w-8 h-8" />,
    shortDesc: "Managing server-side logic, databases, and high-scale APIs.",
    image: imgBackend,
    color: "from-red-600 to-orange-400",
    sections: [
      { title: "Languages", items: ["Java (Spring Boot)", "Python (Django/FastAPI)", "Node.js", ".NET", "PHP"] },
      { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "PL/SQL", "Firebase"] },
      { title: "Concepts", items: ["REST API", "Microservices", "JWT Auth", "API Security", "Caching"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹20,000 – ₹35,000" },
      { level: "Mid-level", amount: "₹50,000 – ₹1L" },
      { level: "Senior", amount: "₹1.2L – ₹4L+" }
    ],
    note: "🔥 Java + Spring Boot & Golang experts are in high demand."
  },
  {
    id: 3,
    title: "Full Stack Development",
    icon: <Code2 className="w-8 h-8" />,
    shortDesc: "Versatile development handling both Client and Server logic.",
    image: imgFullstack,
    color: "from-purple-600 to-pink-500",
    sections: [
      { title: "Frontend", items: ["React.js", "Angular", "Vue.js", "Next.js", "Nuxt.js"] },
      { title: "Backend", items: ["MERN (MongoDB, Express, React, Node)", "MEAN", "Java Spring Boot", "Python", ".NET"] },
      { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "PL/SQL", "Firebase"] },
      { title: "Concepts", items: ["REST API", "Microservices", "JWT Auth", "API Security", "Caching"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹25,000 – ₹40,000" },
      { level: "Mid-level", amount: "₹60,000 – ₹1.2L" },
      { level: "Senior", amount: "₹1.5L – ₹5L" }
    ],
    note: "Full stack is best for startups & product-based companies."
  },
  {
    id: 4,
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8" />,
    shortDesc: "Building native and cross-platform mobile experiences.",
    image: imgMobile,
    color: "from-green-500 to-emerald-600",
    sections: [
      { title: "Android", items: ["Kotlin", "Java", "Jetpack Compose", "Firebase"] },
      { title: "iOS", items: ["Swift", "SwiftUI", "Objective-C"] },
      { title: "Cross Platform", items: ["Flutter", "React Native", "Xamarin"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹20,000 – ₹35,000" },
      { level: "Mid-level", amount: "₹40,000 – ₹80,000" },
      { level: "Senior", amount: "₹1.2L – ₹3L+" }
    ],
    note: "Flutter demand is growing fast in 2026."
  },
  {
    id: 5,
    title: "Software Testing",
    icon: <ClipboardCheck className="w-8 h-8" />,
    shortDesc: "Ensuring application quality through automated scripts.",
    image: imgTesting,
    color: "from-amber-400 to-orange-500",
    sections: [
      { title: "Manual Testing", items: ["Test Cases", "Bug Tracking", "SDLC"] },
      { title: "Automation", items: ["Selenium", "Cypress", "Playwright", "Appium", "Postman (API)"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹20,000 – ₹30,000" },
      { level: "Mid-level", amount: "₹40,000 – ₹70,000" },
      { level: "Senior", amount: "₹80,000 – ₹2.5L+" }
    ],
    note: "Automation testers earn almost equal to developers."
  },
  {
    id: 6,
    title: "DevOps & Cloud",
    icon: <Cloud className="w-8 h-8" />,
    shortDesc: "Automating infrastructure and mastering cloud platforms.",
    image: imgDevops,
    color: "from-slate-700 to-slate-900",
    sections: [
      { title: "Platforms", items: ["AWS", "Azure", "GCP"] },
      { title: "Tools", items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Linux", "CI/CD"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹30,000 – ₹40,000" },
      { level: "Mid-level", amount: "₹60,000 – ₹1L" },
      { level: "Senior", amount: "₹1.5L – ₹4L+" }
    ],
    note: "🔥 One of the highest paying domains in 2026."
  },
  {
    id: 7,
    title: "Data Science / AI / ML",
    icon: <BrainCircuit className="w-8 h-8" />,
    shortDesc: "Transforming data into intelligence with ML and AI.",
    image: imgAI,
    color: "from-indigo-600 to-blue-700",
    sections: [
      { title: "AI/ML", items: ["Python", "Machine Learning", "Deep Learning", "NLP"] },
      { title: "Data Stack", items: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "SQL"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹50k – ₹1.2L" },
      { level: "Mid-level", amount: "₹1.5L – ₹3L" },
      { level: "Senior", amount: "₹4L – ₹6L+" }
    ],
    note: "AI is currently the top paying field."
  },
  {
    id: 8,
    title: "Cyber Security",
    icon: <ShieldAlert className="w-8 h-8" />,
    shortDesc: "Protecting systems through ethical hacking and defense.",
    image: imgSecurity,
    color: "from-emerald-700 to-green-500",
    sections: [
      { title: "Specialization", items: ["Ethical Hacking", "Penetration Testing", "Network Security"] },
      { title: "Tools", items: ["Kali Linux", "CEH Certification", "SOC Analyst Tools"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹30k – ₹60k" },
      { level: "Mid-level", amount: "₹80,000 – ₹1.5L" },
      { level: "Senior", amount: "₹1.5L – ₹3L+" }
    ]
  },
  {
    id: 9,
    title: "Networking",
    icon: <Globe className="w-8 h-8" />,
    shortDesc: "Managing the world's digital connectivity infrastructure.",
    image: imgNetworking,
    color: "from-cyan-600 to-blue-500",
    sections: [
      { title: "Certifications", items: ["CCNA", "CCNP", "Red Hat", "CompTIA"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹20k – ₹40k" },
      { level: "Mid-level", amount: "₹50,000 – ₹80,000" },
      { level: "Senior", amount: "₹1L – ₹3L" }
    ]
  },
  {
    id: 10,
    title: "PEGA (Low-Code BPM)",
    icon: <Layers className="w-8 h-8" />,
    shortDesc: "Developing enterprise-level apps with low-code tech.",
    image: imgPega,
    color: "from-orange-600 to-amber-500",
    sections: [
      { title: "Used In", items: ["Banking", "Insurance", "MNCs"] },
      { title: "Career", items: ["Pega Developer", "System Architect"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹20k – ₹40k" },
      { level: "Experienced", amount: "₹50,000 – ₹80,000" },
      { level: "Architect", amount: "₹1L – ₹2L" }
    ]
  },
  {
    id: 11,
    title: "Google Maps / GIS",
    icon: <MapPin className="w-8 h-8" />,
    shortDesc: "Geospatial analysis for urban and logistics tech.",
    image: imgGIS,
    color: "from-teal-500 to-emerald-400",
    sections: [
      { title: "Tech Stack", items: ["GIS", "QGIS", "ArcGIS", "Google Maps API"] },
      { title: "Sectors", items: ["Urban Planning", "Delivery Apps", "Agriculture Tech"] }
    ],
    salaries: [
      { level: "Fresher", amount: "₹15k – ₹30k" },
      { level: "Mid-level", amount: "₹40,000 – ₹60,000" },
      { level: "Senior", amount: "₹60,000 – ₹1.5L" }
    ]
  },
  {
    id: 12,
    title: "Non-IT High Growth Roles",
    icon: <Users className="w-8 h-8" />,
    shortDesc: "Lucrative business and design roles in the IT world.",
    image: imgNonIT,
    color: "from-rose-500 to-pink-500",
    sections: [
      { title: "Consulting", items: ["SAP Consultant", "Business Analyst", "IT Recruiter"] },
      { title: "Creative", items: ["UI/UX Designer", "Digital Marketing", "Trading"] }
    ],
    salaries: [
      { level: "SAP Consultant", amount: "₹40k – ₹2L / mo" },
      { level: "Business Analyst", amount: "₹30k – ₹2L / mo" },
      { level: "UI/UX Designer", amount: "₹40k – ₹2L / mo" }
    ]
  }
];

export default function CareerGrid() {
  const [selected, setSelected] = useState<TechDomain | null>(null);

  return (
        <div className="min-h-screen bg-background">
       <Navigation /> 


     <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-12">

  {/* 1. Background Image */}
  <div className="absolute inset-0 z-0">
 <img 
      src={ssbbg}
      alt="Srinubabu Sara's Tech Guide"
      className="w-full h-full object-cover"
    /> 
    {/* Dark Overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent"></div> */}
  </div>

  {/* 2. Content Container (Left Aligned) */}
  <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-1">
    
    <div className="max-w-2xl text-left text-[black]">

       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
        Hello, I’m{" "}
        <span className="mb-10 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-transparent">
          Srinubabu Sara
        </span>
        <br />
        <p className="text-[#658DA6] mt-4 text-2xl">Your Personal Guide!</p>
      </h1> 

      <p className="mt-6 text-lg sm:text-xl text-black">
        Welcome to the{" "}
        <span className="font-semibold text-blue-700">
          Software World..
        </span>
      </p>

       <p className="mt-6 text-black text-lg leading-relaxed">
        Are you a <span className="font-semibold text-indigo-700">Fresher</span>, 
        feeling confused about which course to choose, what skills to learn, 
        and how to plan your career? Don’t worry — you’re in the right place!
      </p> 

  
      <div className="mt-10 max-w-4xl mx-auto">
  <h2 className="text-2xl font-semibold mb-8 text-[#D25871] text-left">
   Get a clear roadmap for your career growth...
  </h2>

  {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    

    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-xl mb-4">
        📘
      </div>
      <p className="text-gray-700 font-small">
        Which courses are best for your career growth
      </p>
    </div>


    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 text-xl mb-4">
        🛠️
      </div>
      <p className="text-gray-700 font-small">
        Essential skills for each tech domain
      </p>
    </div>


    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 text-xl mb-4">
        💰
      </div>
      <p className="text-gray-700 font-small">
        Expected salaries and opportunities
      </p>
    </div>

  </div> */}
</div>


    </div>
  </div>

  {/* 3. Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white animate-bounce">
    <span className="text-[12px] font-bold uppercase tracking-[0.2em]">
      Explore
    </span>
    <MousePointer2 className="w-5 h-5" />
  </div>

</section>

      
    <div className="bg-gray-50 p-6 md:p-16 font-sans">
      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {techDomains.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelected(item)}
            className="p-4 group relative bg-white rounded-[1rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full rounded-[1rem] h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="p-8 pt-10 relative">
              <div className={`absolute -top-10 left-8 p-5 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{item.shortDesc}</p>
              <div className="flex items-center text-blue-800 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                Explore Roadmap <TrendingUp className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md">
          <div className="bg-white w-full max-w-5xl max-h-[95vh] rounded-[1rem] overflow-hidden shadow-2xl relative flex flex-col">
            
            {/* Header Image */}
            <div className={`h-40 relative bg-gradient-to-r ${selected.color}`}>
              <img src={selected.image} className="w-full h-full object-cover mix-blend-overlay opacity-40" alt={selected.title} />
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-8 right-8 p-3 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-8 left-10 text-white">
                <h2 className="text-3xl font-black">{selected.title}</h2>
                <p className="opacity-80">Skillsets & Salary Expectations</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-10 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Technologies Section */}
                <div className="space-y-8">
                  {selected.sections.map((sec, i) => (
                    <div key={i}>
                      <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">{sec.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {sec.items.map((item, j) => (
                          <span key={j} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Salary Section */}
                <div className="bg-gradient-to-r from-slate-100 via-sky-100 to-indigo-200 rounded-[2rem] p-8 text-black">
                  <h4 className="flex items-center text-lg font-bold mb-6 text-[#D96281]">
                    <Briefcase className="mr-3" /> Monthly Salaries
                  </h4>
                  <div className="space-y-4">
                    {selected.salaries.map((s, i) => (
                      <div key={i} className="flex justify-between border-b border-white/10 pb-3 last:border-0">
                        <span className="text-black">{s.level}</span>
                        <span className="font-black text-blue-700">{s.amount}</span>
                      </div>
                    ))}
                  </div>
                  {selected.note && (
                    <div className="mt-8 text-sm italic text-blue-800 bg-white/5 p-4 rounded-xl">
                      {selected.note}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      {/* <div className="max-w-7xl mx-auto mt-24 bg-slate-900 rounded-[3rem] p-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-8">💎 Highest Paying Tech in 2026</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["AI / ML", "DevOps / Cloud", "Cybersecurity", "Full Stack", "SAP & Pega"].map(tag => (
            <span key={tag} className="px-8 py-3 bg-white/10 rounded-full border border-white/10 font-bold hover:bg-blue-600 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div> */}
    </div>
   <Footer /> 
</div>
    
  );
}
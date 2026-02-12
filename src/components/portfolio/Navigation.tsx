import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/sslogo.png";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#expertise", label: "Expertise" },
  { to: "/#techstack", label: "Tech Stack" },
  { to: "/#experience", label: "Experience" },
  { to: "/#projects", label: "Projects" },
  { to: "/#contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHireMeClick = () => {
    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      // Smooth scroll if #contact exists
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <img src={logo} alt="Logo" className="p-2" />
          </div>
          <span className="font-bold text-xl text-foreground">
            SRINUBABU SARA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Desktop Hire Me */}
          <Button variant="hero" size="default" onClick={handleHireMeClick}>
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden glass border-t border-border"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Hire Me */}
            <Button variant="hero" size="lg" className="w-full mt-4" onClick={handleHireMeClick}>
              Hire Me
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navigation;

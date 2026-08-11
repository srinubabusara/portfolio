import { Github, Linkedin, Mail, Twitter, Instagram, Facebook } from "lucide-react";
import logo from "../../assets/images/sslogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            
            {/* Left Section: Logo + Name + Address */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl p-2 bg-gradient-accent flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                </div>
                <span className="font-bold text-xl text-background">SrinubabuSara</span>
              </div>
              <p className="text-sm text-background/60">
                Hyderabad, Telangana <br />
                India
              </p>
            </div>

            {/* Middle Section: Navigation Links */}
            <div className="flex flex-col items-start text-sm text-background/70">
              <ul className="list-disc pl-5 space-y-1">
                {/* <li>
                  <Link to="/" className="hover:text-background transition-colors">
                    Home
                  </Link>
                </li> */}
                <li>
                  <Link to="/fresher-guide" className="hover:text-background transition-colors">
                    New Joiners’ Guide
                  </Link>
                </li>
                                <li>
                  <Link to="/react-question_answers" className="hover:text-background transition-colors">
                   React FAQ 
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-background transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-background transition-colors">
                    Terms & Conditions
                  </Link>
                </li> 
              </ul>
            </div>

            {/* Right Section: Social Icons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:srinubabu.sara@gmail.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-background" />
              </a>
              <a
                href="https://linkedin.com/in/srinubabusara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-background" />
              </a>
              <a
                href="https://github.com/srinubabusara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-background" />
              </a>
              <a
                href="https://twitter.com/srinubabusara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-background" />
              </a>
              <a
                href="https://instagram.com/srinubabu_sara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-background" />
              </a>
              <a
                href="https://facebook.com/srinubabusara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/10 pt-8 text-center text-sm text-background/60">
            <p>© {currentYear} SrinubabuSara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

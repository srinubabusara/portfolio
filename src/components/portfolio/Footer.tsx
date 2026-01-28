import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <span className="font-bold text-xl text-background">
                SrinubabuSara
              </span>
            </div>

            {/* About Me Section */}
            {/* <div className="text-center md:text-left">
              <p className="text-sm text-background/60">
                Passionate about building innovative solutions with a focus on AI, modern frontend frameworks, and scalable backend systems. Let's connect and collaborate!
              </p>
            </div> */}

            {/* Social Links */}
            <div className="flex items-center gap-4">
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

          {/* Copyright Notice */}
          <div className="border-t border-background/10 pt-8">
            <div className="justify-between text-center gap-4 text-sm text-background/60">
              <p>
                © {currentYear} SrinubabuSara. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

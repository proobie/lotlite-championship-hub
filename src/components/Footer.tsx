import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground circuit-pattern">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 lg:order-1">
            <div className="flex items-center space-x-3">
              <img src="/Logo.png" alt="Lotlite Technology logo" className="w-20 h-20 object-contain rounded-lg" />
            </div>
            <p className="text-sm text-accent-foreground/80 leading-relaxed">
              Lotlite Technology is an authorized training partner for the Microsoft Office Specialist (MOS) Program,
              dedicated to empowering students with world-class digital skills and global recognition.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/lotlitetechnology" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="https://www.instagram.com/lotlite_technology?igsh=MWVsa2R0b3JtYWZqOA==" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a href="https://www.linkedin.com/company/lotlite-technology/" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:order-2">
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/competition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                  Competition Details
                </Link>
              </li>
              <li>
                <Link to="/resources" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/register" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>



          {/* Contact Info */}
          <div className="lg:order-3">
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href="mailto:s.kumar@lotlitetechnology.com" className="text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                    s.kumar@lotlitetechnology.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <a href="tel:+919766499364" className="text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                    +91 9766499364
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Office</p>
                  <p className="text-sm text-accent-foreground/80">
                    B1-0302, Floor (-2), Blue Ridge Township, Hinjewadi Phase-1, Pune-411057
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-accent-foreground/80 text-center md:text-left">
              © {currentYear} Lotlite Technology. All Rights Reserved.
            </p>
            <p className="text-sm text-accent-foreground/80 text-center md:text-right">
              Microsoft Office Specialist is a registered trademark of Microsoft Corporation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

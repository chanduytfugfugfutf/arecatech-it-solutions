import { Monitor, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-display">A</span>
              </div>
              <span className="text-xl font-bold font-display text-foreground">
                Areca<span className="text-primary">Tech</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Your trusted IT partner delivering reliable, scalable technology solutions 
              to keep your business running at peak performance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold font-display mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Desktop & IT Support</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Networking Support</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Server Support</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cloud Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold font-display mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} ArecaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

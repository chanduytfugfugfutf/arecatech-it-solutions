import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Ready to Transform Your{" "}
            <span className="text-gradient">IT Infrastructure?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how ArecaTech can help streamline your IT operations, 
            reduce costs, and boost productivity. Contact us today for a free consultation.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span>+1 (234) 567-890</span>
            </a>
            <a 
              href="mailto:support@arecatech.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span>support@arecatech.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

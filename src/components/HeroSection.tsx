import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Trusted IT Partner for Modern Businesses</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
          Powering Your Business with
          <br />
          <span className="text-gradient">Expert IT Solutions</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
          From desktop support to cloud infrastructure, ArecaTech delivers reliable, 
          scalable IT services that keep your business running 24/7.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Button variant="hero" size="lg">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="glass" size="lg">
            View Our Services
          </Button>
        </div>

        {/* Stats/features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl glass">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">Secure Solutions</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl glass">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">24/7 Support</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl glass">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">Fast Response</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

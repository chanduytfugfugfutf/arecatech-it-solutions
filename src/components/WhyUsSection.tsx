import { CheckCircle, Users, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified IT professionals with years of industry experience ready to tackle any challenge.",
  },
  {
    icon: Headphones,
    title: "24/7 Availability",
    description: "Round-the-clock support ensures your business never experiences extended downtime.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Successfully serving businesses with reliable IT solutions and exceptional service quality.",
  },
  {
    icon: CheckCircle,
    title: "Customized Solutions",
    description: "Tailored IT strategies designed specifically for your business needs and goals.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Your Trusted{" "}
              <span className="text-gradient">IT Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At ArecaTech, we don't just fix problems – we prevent them. Our proactive 
              approach to IT management ensures your systems run smoothly, securely, 
              and efficiently, so you can focus on what matters most: growing your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl gradient-card border border-border">
                <div className="text-4xl font-bold text-primary font-display mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guaranteed</div>
              </div>
              <div className="p-6 rounded-xl gradient-card border border-border">
                <div className="text-4xl font-bold text-primary font-display mb-2">&lt;1hr</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl gradient-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

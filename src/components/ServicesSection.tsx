import { Monitor, Network, Server, Cloud, Laptop, Wifi } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Desktop & IT Support",
    description: "Comprehensive desktop support and IT troubleshooting to keep your workstations running smoothly.",
  },
  {
    icon: Network,
    title: "Networking Support",
    description: "Design, implementation, and maintenance of robust network infrastructure for seamless connectivity.",
  },
  {
    icon: Server,
    title: "Server Support",
    description: "Expert server management, maintenance, and optimization for maximum uptime and performance.",
  },
  {
    icon: Cloud,
    title: "Cloud Support",
    description: "Cloud migration, management, and optimization services for modern scalable infrastructure.",
  },
  {
    icon: Wifi,
    title: "LAN/WAN Support",
    description: "Local and wide area network setup, configuration, and ongoing support for your business.",
  },
  {
    icon: Laptop,
    title: "Laptop & Desktop",
    description: "Hardware repair, upgrades, and maintenance services for all your computing devices.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Complete IT Solutions for{" "}
            <span className="text-gradient">Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From desktop support to cloud infrastructure, we provide end-to-end IT services 
            to keep your business running at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl gradient-card border border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 gradient-primary rounded-b-2xl group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

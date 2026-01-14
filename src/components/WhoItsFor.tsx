import { Forklift, HardHat, Users } from "lucide-react";

const audiences = [
  {
    icon: Forklift,
    title: "Equipment Rental Companies",
    description: "Forklifts, aerial lifts, excavators, trailers — if you rent heavy equipment, this is built for you.",
  },
  {
    icon: HardHat,
    title: "Construction & Industrial Suppliers",
    description: "Scaffolding, tools, generators, and more. Capture project-based rental requests with ease.",
  },
  {
    icon: Users,
    title: "Local Operators with Small Teams",
    description: "No more phone tag or lost emails. Get organized quote requests even when you're on-site.",
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-20 lg:py-32 section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built For Rental Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you're a single-location shop or a growing fleet, Loop Quote fits your workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div 
              key={audience.title}
              className="group text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-6 group-hover:bg-icon-bg group-hover:border-accent/30 transition-all duration-300">
                <audience.icon className="w-7 h-7 text-muted-foreground group-hover:text-icon-color transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;

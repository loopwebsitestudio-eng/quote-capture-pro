import { Clock, MessageSquareOff, ClipboardCheck, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Capture Leads 24/7",
    description: "Your quote form works around the clock — even when your phones don't.",
  },
  {
    icon: MessageSquareOff,
    title: "Reduce Back-and-Forth",
    description: "Customers provide everything upfront. No endless email chains to clarify specs.",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Requests, First Time",
    description: "Structured forms mean you get equipment type, dates, delivery info, and files — all at once.",
  },
  {
    icon: Shield,
    title: "Professional First Impression",
    description: "A polished quote widget shows customers you're serious and easy to work with.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-32 bg-section-alt section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Rental Businesses Love It
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Stop chasing leads. Start closing deals.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="bg-background rounded-xl p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-icon-bg flex items-center justify-center mb-5">
                <benefit.icon className="w-5 h-5 text-icon-color" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

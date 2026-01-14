import { Code, FileText, Inbox } from "lucide-react";

const steps = [
  {
    icon: Code,
    step: "01",
    title: "Add the Widget",
    description: "Embed a simple code snippet on your website. Works with any platform — WordPress, Wix, custom builds, you name it.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Customers Request Quotes",
    description: "Visitors select equipment, choose rental dates, and upload project files. All in one streamlined form.",
  },
  {
    icon: Inbox,
    step: "03",
    title: "You Get Organized Leads",
    description: "Receive complete, actionable quote requests instantly. No back-and-forth, no missing info.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-section-alt section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps to capture better leads, 24/7.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-accent/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-icon-bg flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-icon-color" />
                </div>
                <span className="text-5xl font-bold text-border">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-8 lg:w-12 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

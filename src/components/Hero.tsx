import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import constructionEquipment from "@/assets/construction-equipment-hero.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 section-padding relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 pointer-events-none" />
      
      <div className="container-narrow text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-up shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
          <span className="text-sm text-muted-foreground font-medium">Coming Soon — Turn Website Visitors Into Qualified Rental Leads</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100 text-balance">
          Stop Missing Leads.{" "}
          <span className="text-accent">Start Converting.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200 text-balance">
          An embeddable quote widget built for <span className="text-foreground font-medium">construction equipment rental businesses</span> — no missed calls, no messy emails.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
          <Button variant="cta" size="xl" asChild className="group">
            <a href="#waitlist">
              Request Early Access
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="cta-outline" size="xl" asChild className="group">
            <a href="#how-it-works">
              <Play className="mr-2 h-4 w-4" />
              See How It Works
            </a>
          </Button>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground animate-fade-up animation-delay-300">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Early users get founding pricing
          </span>
        </div>
      </div>
      
      {/* Hero Image Section */}
      <div className="mt-16 lg:mt-20 relative z-10 animate-fade-up animation-delay-300">
        <div className="container-wide">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-br from-muted/50 to-background">
            <img 
              src={constructionEquipment} 
              alt="Professional construction equipment including excavators and bulldozers" 
              className="w-full h-auto object-cover"
              loading="eager"
            />
            {/* Subtle overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

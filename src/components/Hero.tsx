import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import equipmentHero from "@/assets/equipment-hero.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-sm text-muted-foreground">Coming Soon — Join the Waitlist</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100 text-balance">
              Turn Website Visitors Into{" "}
              <span className="text-accent">Qualified Rental Leads</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-up animation-delay-200 text-balance">
              An embeddable quote widget built for equipment rental businesses — no missed calls, no messy emails.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button variant="cta" size="xl" asChild>
                <a href="#waitlist">
                  Request Early Access
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="cta-outline" size="xl" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground animate-fade-up animation-delay-300">
              No credit card required • Early users get founding pricing
            </p>
          </div>
          
          <div className="animate-fade-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={equipmentHero} 
                alt="Construction equipment rental yard with forklift, aerial lift, and excavator" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

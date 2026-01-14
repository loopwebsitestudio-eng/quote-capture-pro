import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("You're on the list! We'll be in touch soon.");
  };

  return (
    <section id="waitlist" className="py-20 lg:py-32 section-padding">
      <div className="container-narrow">
        <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Get Founding Access
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Join the waitlist — early users get founding pricing locked in forever.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-accent"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg"
                  disabled={isSubmitting}
                  className="shrink-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight />
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-sm text-primary-foreground/60 mt-4">
                No spam, ever. We'll only email you when we're ready to launch.
              </p>
            </>
          ) : (
            <div className="py-8">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                You're In!
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-md mx-auto">
                Thanks for joining the waitlist. We'll reach out as soon as Loop Quote is ready for you.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;

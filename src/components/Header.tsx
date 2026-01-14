import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide section-padding py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">LQ</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Loop Quote</span>
        </div>
        <Button variant="cta" size="sm" asChild>
          <a href="#waitlist">Request Early Access</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;

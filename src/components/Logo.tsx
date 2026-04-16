import logo from "@/assets/logo-21studio.png";

export const Logo = ({ className = "h-12" }: { className?: string }) => (
  <img src={logo} alt="21Studio Detailing" className={className} />
);

// Lightweight text-only variant for footer/compact spots
export const LogoText = ({ className = "" }: { className?: string }) => (
  <div className={`inline-flex items-baseline gap-2 ${className}`}>
    <span className="font-block text-3xl tracking-tight text-foreground">21STUDIO</span>
    <span className="font-script text-xl text-neon-pink">detailing</span>
  </div>
);

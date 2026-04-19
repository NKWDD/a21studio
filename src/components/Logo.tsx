import { cn } from "@/lib/utils";

/**
 * Benny's-style typographic wordmark for 21STUDIO Detailing.
 * White block "21STUDIO" + script "Detailing" — Benny's actual look.
 */
export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={cn("inline-flex flex-col items-center leading-none select-none", className)}>
    <span className="font-block text-[2.4rem] sm:text-5xl md:text-[3.4rem] lg:text-6xl tracking-[0.04em] text-foreground text-glow-warm">
      21STUDIO
    </span>
    <span className="flex items-center gap-3 -mt-1">
      <Star />
      <span className="font-script text-2xl sm:text-3xl md:text-[2rem] text-foreground -mt-1 text-glow-warm">
        Detailing
      </span>
      <Star />
    </span>
  </div>
);

const Star = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" className="text-neon-orange shrink-0" fill="currentColor" aria-hidden>
    <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
  </svg>
);

// Compact text variant for footer
export const LogoText = ({ className = "" }: { className?: string }) => (
  <div className={`inline-flex flex-col items-start leading-none ${className}`}>
    <span className="font-block text-3xl tracking-tight text-foreground">21STUDIO</span>
    <span className="font-script text-xl text-neon-orange mt-1">Detailing</span>
  </div>
);

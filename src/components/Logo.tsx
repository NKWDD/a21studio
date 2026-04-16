import { cn } from "@/lib/utils";

/**
 * Typographic Benny's-style wordmark for 21STUDIO Detailing.
 * Big arched-feel block "21STUDIO" with a script "Detailing" underneath
 * flanked by small star/dot accents — same vibe as Benny's logo.
 */
export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={cn("inline-flex flex-col items-center leading-none select-none", className)}>
    <span className="font-block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] text-foreground drop-shadow-[0_2px_0_hsl(0_0%_0%/0.6)]">
      21STUDIO
    </span>
    <span className="flex items-center gap-3 -mt-1">
      <Star />
      <span className="font-script text-2xl sm:text-3xl md:text-4xl text-foreground -mt-1 [text-shadow:_0_2px_0_hsl(0_0%_0%/0.5)]">
        Detailing
      </span>
      <Star />
    </span>
  </div>
);

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" className="text-foreground/90 shrink-0" fill="currentColor" aria-hidden>
    <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
  </svg>
);

// Compact text variant for footer
export const LogoText = ({ className = "" }: { className?: string }) => (
  <div className={`inline-flex flex-col items-start leading-none ${className}`}>
    <span className="font-block text-3xl tracking-tight text-foreground">21STUDIO</span>
    <span className="font-script text-xl text-neon-pink mt-0.5">Detailing</span>
  </div>
);

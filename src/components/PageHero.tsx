import { ReactNode } from "react";

/**
 * Inner-page hero. Provides the graffiti backdrop the (transparent)
 * header sits on, plus extra top padding so the centered logo + nav
 * have room to breathe.
 */
export const PageHero = ({ tag, title, sub, children }: { tag?: string; title: string; sub?: string; children?: ReactNode }) => (
  <section className="relative overflow-hidden border-b border-border graffiti-bg">
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
    <div className="container relative pt-44 lg:pt-52 pb-20 md:pb-24 text-center">
      {tag && (
        <div className="inline-block skew-tag bg-neon-orange px-4 py-1 mb-6 animate-flicker">
          <span className="block font-block text-xs tracking-widest text-primary-foreground" style={{ transform: "skew(8deg)" }}>{tag}</span>
        </div>
      )}
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] animate-slide-up">
        {title}
      </h1>
      {sub && <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">{sub}</p>}
      {children && <div className="mt-8 animate-slide-up">{children}</div>}
    </div>
  </section>
);

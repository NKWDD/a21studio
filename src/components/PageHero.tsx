import { ReactNode } from "react";

export const PageHero = ({ tag, title, sub, children }: { tag?: string; title: string; sub?: string; children?: ReactNode }) => (
  <section className="relative overflow-hidden border-b border-border">
    <div className="absolute inset-0 graffiti-bg opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
    <div className="container relative py-24 md:py-32 text-center">
      {tag && (
        <div className="inline-block skew-tag bg-neon-pink px-4 py-1 mb-6 animate-flicker">
          <span className="block -skew-x-0 font-block text-xs tracking-widest text-primary-foreground" style={{ transform: "skew(8deg)" }}>{tag}</span>
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

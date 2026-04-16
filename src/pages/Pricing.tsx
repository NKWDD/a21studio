import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/utils";
import floorBg from "@/assets/floor-bg.jpg";

const Pricing = () => {
  const { t } = useLang();
  return (
    <>
      <PageHero tag="PACKAGES" title={t.pricing.title} sub={t.pricing.sub} />

      {/* Packages */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${floorBg})` }} />
        <div className="absolute inset-0 bg-background/80" />

        <div className="container relative">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.pricing.pkg.map((p, i) => {
              const featured = i === 1;
              return (
                <div key={i} className={cn(
                  "relative p-8 border-2 transition-smooth flex flex-col bg-card",
                  featured
                    ? "border-neon-orange shadow-orange md:scale-105"
                    : "border-border hover:border-foreground"
                )}>
                  {featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-orange text-primary-foreground px-4 py-1 font-block text-xs tracking-widest skew-tag">
                      <span className="block" style={{ transform: "skew(8deg)" }}>{t.pricing.popular}</span>
                    </div>
                  )}
                  <h3 className={cn("font-display text-3xl uppercase", featured ? "text-neon-orange" : "text-foreground")}>{p.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground tracking-widest uppercase">{t.pricing.from}</span>
                    <span className="font-display text-5xl text-foreground">{p.price}</span>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check size={18} className="text-neon-orange shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 font-block tracking-wider uppercase transition-smooth",
                    featured
                      ? "bg-neon-orange text-primary-foreground hover:shadow-orange"
                      : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                  )}>
                    {t.cta.book} <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="border-t border-border bg-card/40">
        <div className="container py-20 max-w-5xl">
          <div className="text-center mb-12">
            <p className="font-block text-neon-orange tracking-[0.3em] text-sm">— {t.services.sub} —</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase mt-2 text-foreground">{t.services.title}</h2>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {t.services.items.map((s, i) => (
              <li key={i} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-5">
                <span className="font-block text-lg tracking-[0.2em] uppercase text-neon-orange">
                  {s.t}
                </span>
                <span className="text-foreground/85">{s.d}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-neon-orange text-primary-foreground px-8 py-4 font-block tracking-wider uppercase shadow-orange hover:shadow-[0_0_50px_hsl(var(--neon-orange)/0.7)] transition-smooth"
            >
              {t.cta.quote} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Pricing;

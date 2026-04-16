import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const { t } = useLang();
  return (
    <>
      <PageHero tag="PACKAGES" title={t.pricing.title} sub={t.pricing.sub} />

      {/* Packages */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.pricing.pkg.map((p, i) => {
            const featured = i === 1;
            return (
              <div key={i} className={cn(
                "relative p-8 border-2 transition-smooth flex flex-col",
                featured
                  ? "border-neon-pink bg-card shadow-neon-pink md:scale-105"
                  : "border-border bg-card hover:border-neon-cyan"
              )}>
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-pink text-primary-foreground px-4 py-1 font-block text-xs tracking-widest skew-tag">
                    <span className="block" style={{ transform: "skew(8deg)" }}>{t.pricing.popular}</span>
                  </div>
                )}
                <h3 className={cn("font-display text-3xl uppercase", featured ? "text-neon-pink" : "")}>{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xs text-muted-foreground tracking-widest uppercase">{t.pricing.from}</span>
                  <span className="font-display text-5xl">{p.price}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check size={18} className={featured ? "text-neon-pink shrink-0 mt-0.5" : "text-neon-cyan shrink-0 mt-0.5"} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 font-block tracking-wider uppercase transition-smooth",
                  featured
                    ? "bg-neon-pink text-primary-foreground hover:shadow-neon-pink"
                    : "border-2 border-foreground hover:bg-foreground hover:text-background"
                )}>
                  {t.cta.book} <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services list — moved here from its own page. Simple, readable. */}
      <section className="border-t border-border bg-card/40">
        <div className="container py-20 max-w-5xl">
          <div className="text-center mb-12">
            <p className="font-block text-neon-cyan tracking-[0.3em] text-sm">— {t.services.sub} —</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase mt-2">{t.services.title}</h2>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {t.services.items.map((s, i) => (
              <li key={i} className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 py-5">
                <span className="font-block text-lg tracking-[0.2em] uppercase text-neon-pink">
                  {s.t}
                </span>
                <span className="text-muted-foreground">{s.d}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-neon-pink text-primary-foreground px-8 py-4 font-block tracking-wider uppercase shadow-neon-pink hover:shadow-[0_0_50px_hsl(var(--neon-pink)/0.8)] transition-smooth"
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

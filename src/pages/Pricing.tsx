import { Check, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/contexts/LangContext";
import floorBg from "@/assets/floor-bg.jpg";

const Pricing = () => {
  const { t } = useLang();
  return (
    <>
      <PageHero tag="PRICE LIST" title={t.pricing.title} sub={t.pricing.sub} />

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${floorBg})` }} />
        <div className="absolute inset-0 bg-background/85" />

        <div className="container relative max-w-6xl">
          {t.pricing.categories.map((cat, ci) => (
            <div key={ci} className="mb-20 last:mb-0">
              <div className="mb-10 text-center">
                <p className="font-block text-neon-orange tracking-[0.3em] text-sm">— {String(ci + 1).padStart(2, "0")} —</p>
                <h2 className="font-display text-4xl md:text-5xl uppercase mt-2 text-foreground">{cat.name}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, ii) => {
                  const benefits = "benefits" in item ? item.benefits : undefined;
                  const best = "best" in item ? item.best : undefined;
                  const oldPrice = "oldPrice" in item ? (item as { oldPrice?: string }).oldPrice : undefined;
                  return (
                    <div
                      key={ii}
                      className="relative bg-card border-2 border-border hover:border-neon-orange transition-smooth p-7 flex flex-col"
                    >
                      {oldPrice && (
                        <div className="absolute -top-3 right-5 skew-tag bg-neon-orange px-3 py-1 shadow-orange">
                          <span className="block font-block text-[10px] tracking-[0.3em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
                            {t.pricing.promo}
                          </span>
                        </div>
                      )}
                      <h3 className="font-display text-2xl uppercase text-foreground leading-tight">{item.name}</h3>
                      <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                        <span className="text-xs text-muted-foreground tracking-widest uppercase">{t.pricing.from}</span>
                        <span className="font-display text-4xl text-neon-orange">{item.price}</span>
                        {oldPrice && (
                          <span className="text-base text-muted-foreground line-through decoration-neon-orange/70">
                            {oldPrice}
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-foreground/80">{item.desc}</p>

                      <p className="mt-5 font-block tracking-[0.2em] uppercase text-xs text-foreground/60">
                        {t.pricing.includes}
                      </p>
                      <ul className="mt-2 space-y-2 flex-1">
                        {item.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <Check size={16} className="text-neon-orange shrink-0 mt-0.5" />
                            <span className="text-foreground/90">{f}</span>
                          </li>
                        ))}
                      </ul>

                      {benefits && (
                        <>
                          <p className="mt-5 font-block tracking-[0.2em] uppercase text-xs text-foreground/60">
                            {t.pricing.benefits}
                          </p>
                          <ul className="mt-2 space-y-2">
                            {benefits.map((b, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm">
                                <Check size={16} className="text-neon-orange shrink-0 mt-0.5" />
                                <span className="text-foreground/90">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {best && (
                        <div className="mt-5 pt-4 border-t border-border">
                          <p className="text-xs uppercase tracking-widest text-foreground/60">{t.pricing.bestFor}</p>
                          <p className="text-sm text-foreground/90 mt-1">{best}</p>
                        </div>
                      )}

                      <Link
                        to="/contact"
                        className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 font-block tracking-wider uppercase text-sm border-2 border-foreground text-foreground hover:bg-neon-orange hover:border-neon-orange hover:text-primary-foreground transition-smooth"
                      >
                        {t.cta.book} <ArrowRight size={14} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Important info */}
          <div className="mt-12 border-2 border-neon-orange/40 bg-card/80 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Info size={20} className="text-neon-orange" />
              <h3 className="font-block uppercase tracking-[0.2em] text-foreground">{t.pricing.important}</h3>
            </div>
            <ul className="space-y-2">
              {t.pricing.importantNotes.map((n, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <span className="text-neon-orange mt-0.5">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>

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

import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Droplets } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { BeforeAfter } from "@/components/BeforeAfter";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";

const Index = () => {
  const { t } = useLang();
  const featured = t.services.items.slice(0, 3);
  const icons = [Sparkles, Droplets, Shield];

  return (
    // ONE continuous graffiti backdrop for the whole homepage.
    // A fixed dark overlay sits between the wallpaper and the content
    // so every section reads cleanly without breaking the visual flow.
    <div className="relative graffiti-bg">
      {/* Soft overlay across the entire page for readability.
          Top portion is darker so the transparent header blends into the
          graffiti instead of meeting it on a hard horizontal line. */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 12%, hsl(var(--background) / 0.78) 28%, hsl(var(--background) / 0.82) 100%)",
        }}
      />

      <div className="relative">
        {/* HERO — headline + tagline + CTAs FIRST, sitting under the header */}
        <section className="relative">
          <div className="container pt-40 lg:pt-48 pb-10 md:pb-14 text-center">
            <div className="inline-block skew-tag bg-neon-orange px-4 py-1.5 mb-6 animate-flicker">
              <span className="block font-block text-xs tracking-[0.3em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
                {t.home.tagline}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] text-foreground">
              <span className="block">{t.home.title1}</span>
              <span className="block text-neon-orange">{t.home.title2}</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">{t.home.sub}</p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-neon-orange text-primary-foreground px-8 py-4 font-block tracking-[0.2em] uppercase shadow-orange hover:shadow-[0_0_50px_hsl(var(--neon-orange)/0.7)] transition-smooth"
              >
                {t.cta.book} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-8 py-4 font-block tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-smooth"
              >
                {t.nav.gallery}
              </Link>
            </div>
          </div>
        </section>

        {/* SHOWCASE — Before/After below the headline */}
        <section className="relative">
          <div className="container pb-16 md:pb-24">
            <div className="max-w-6xl mx-auto">
              <BeforeAfter before={beforeImg} after={afterImg} title="" />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="relative py-20 border-y border-border/50">
          {/* Slight extra darkening band so the cards have contrast */}
          <div className="absolute inset-0 bg-background/50 pointer-events-none" aria-hidden />

          <div className="container relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-block text-neon-orange tracking-[0.3em] text-sm">— {t.home.featuresSub} —</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase mt-3 text-foreground">{t.home.featuresTitle}</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {featured.map((s, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={i}
                    className="group relative bg-card/95 backdrop-blur border border-border p-8 hover:border-neon-orange transition-smooth"
                  >
                    <Icon className="text-neon-orange mb-5" size={36} strokeWidth={1.5} />
                    <h3 className="font-block text-xl tracking-wide uppercase mb-2 text-foreground">{s.t}</h3>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-neon-orange font-block tracking-[0.2em] uppercase hover:gap-4 transition-all border-b-2 border-neon-orange/40 hover:border-neon-orange pb-1"
              >
                {t.nav.services} — {t.home.seeAll} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center border-2 border-neon-orange p-12 md:p-16 bg-background/70 backdrop-blur-sm">
              <h2 className="font-display text-4xl md:text-6xl uppercase text-foreground">{t.home.ctaTitle}</h2>
              <p className="mt-4 text-lg text-foreground/75">{t.home.ctaSub}</p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-neon-orange text-primary-foreground px-8 py-4 font-block tracking-[0.2em] uppercase shadow-orange hover:shadow-[0_0_50px_hsl(var(--neon-orange)/0.7)] transition-smooth"
              >
                {t.cta.book} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;

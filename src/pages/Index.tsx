import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Droplets } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import heroBA from "@/assets/hero-beforeafter.jpg";
import metalBg from "@/assets/metal-bg.jpg";
import asphaltBg from "@/assets/asphalt-bg.jpg";
import paintBg from "@/assets/paint-bg.jpg";

const Index = () => {
  const { t } = useLang();
  const featured = t.services.items.slice(0, 3);
  const icons = [Sparkles, Droplets, Shield];

  return (
    <>
      {/* HERO — graffiti backdrop, header sits on top, then straight into the showcase image */}
      <section className="relative overflow-hidden graffiti-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/40 to-background pointer-events-none" />
        <div className="container relative pt-44 lg:pt-52 pb-12 md:pb-16">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden border-2 border-foreground/80 shadow-card-heavy">
              <img
                src={heroBA}
                alt="Car before and after detailing transformation"
                className="w-full aspect-[16/9] object-cover"
                width={1920}
                height={1024}
              />
              <div className="absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 bg-foreground/90 pointer-events-none" />
              <div className="absolute top-5 left-5 skew-tag bg-foreground px-5 py-2">
                <span className="block font-block text-base tracking-[0.3em] text-background" style={{ transform: "skew(8deg)" }}>
                  {t.gallery.before}
                </span>
              </div>
              <div className="absolute top-5 right-5 skew-tag bg-neon-orange px-5 py-2">
                <span className="block font-block text-base tracking-[0.3em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
                  {t.gallery.after}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO — moved-down headline + tagline + CTAs, on glossy-paint backdrop
          that fades in from the hero (top) and out into the next section (bottom) */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${paintBg})` }}
          aria-hidden
        />
        {/* Top + bottom fades into the surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background pointer-events-none" />

        <div className="container relative py-20 md:py-28 text-center">
          <div className="inline-block skew-tag bg-neon-orange px-4 py-1.5 mb-5 animate-flicker">
            <span className="block font-block text-xs tracking-[0.3em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
              {t.home.tagline}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-foreground">
            <span className="block">{t.home.title1}</span>
            <span className="block text-neon-orange">{t.home.title2}</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">{t.home.sub}</p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
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

      {/* WHAT WE DO — dark metal workshop */}
      <section className="relative overflow-hidden py-24 border-y border-border">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${metalBg})` }} />
        <div className="absolute inset-0 bg-background/80" />

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
                  className="group relative bg-card/90 backdrop-blur border border-border p-8 hover:border-neon-orange transition-smooth overflow-hidden"
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

      {/* CTA — wet asphalt at night */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${asphaltBg})` }} />
        <div className="absolute inset-0 bg-background/75" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center border-2 border-neon-orange p-12 md:p-16 bg-background/60 backdrop-blur-sm">
            <h2 className="font-display text-4xl md:text-6xl uppercase text-foreground">{t.home.ctaTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.home.ctaSub}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-neon-orange text-primary-foreground px-8 py-4 font-block tracking-[0.2em] uppercase shadow-orange hover:shadow-[0_0_50px_hsl(var(--neon-orange)/0.7)] transition-smooth"
            >
              {t.cta.book} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

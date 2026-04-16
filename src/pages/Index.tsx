import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Droplets } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import heroBA from "@/assets/hero-beforeafter.jpg";
import concreteBg from "@/assets/concrete-bg.jpg";
import paintBg from "@/assets/paint-bg.jpg";

const Index = () => {
  const { t } = useLang();
  // Show only first 3 services on the homepage
  const featured = t.services.items.slice(0, 3);
  const icons = [Sparkles, Droplets, Shield];

  return (
    <>
      {/* HERO — graffiti backdrop continues from header (header is absolute on home) */}
      <section className="relative overflow-hidden graffiti-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background pointer-events-none" />
        {/* Spacer so content clears the absolute header on desktop */}
        <div className="container relative pt-44 lg:pt-52 pb-10 md:pb-14">
          <div className="text-center mb-8">
            <div className="inline-block skew-tag bg-neon-pink px-4 py-1.5 mb-4 animate-flicker">
              <span className="block font-block text-xs tracking-[0.3em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
                {t.home.tagline}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.9]">
              <span className="block">{t.home.title1}</span>
              <span className="block text-neon-pink neon-text-pink">{t.home.title2}</span>
            </h1>
          </div>

          {/* Big single before/after image */}
          <div className="relative group max-w-6xl mx-auto">
            <div className="absolute -inset-3 bg-gradient-graffiti opacity-50 blur-3xl" />
            <div className="relative overflow-hidden border-2 border-neon-pink shadow-neon-pink">
              <img
                src={heroBA}
                alt="Car before and after detailing transformation"
                className="w-full aspect-[16/9] object-cover"
                width={1920}
                height={1024}
              />
              {/* Center divider line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 bg-foreground/90 shadow-[0_0_20px_hsl(var(--neon-pink))] pointer-events-none" />
              {/* BEFORE tag */}
              <div className="absolute top-5 left-5 skew-tag bg-neon-cyan px-5 py-2">
                <span className="block font-block text-base tracking-[0.3em] text-background" style={{ transform: "skew(8deg)" }}>
                  {t.gallery.before}
                </span>
              </div>
              {/* AFTER tag */}
              <div className="absolute top-5 right-5 skew-tag bg-neon-pink px-5 py-2 animate-flicker">
                <span className="block font-block text-base tracking-[0.3em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
                  {t.gallery.after}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-neon-pink text-primary-foreground px-8 py-4 font-block tracking-[0.2em] uppercase shadow-neon-pink hover:shadow-[0_0_50px_hsl(var(--neon-pink)/0.8)] transition-smooth"
            >
              {t.cta.book} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border-2 border-neon-cyan text-neon-cyan px-8 py-4 font-block tracking-[0.2em] uppercase hover:bg-neon-cyan hover:text-background transition-smooth"
            >
              {t.nav.gallery}
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — 3 services + see more — concrete dark background */}
      <section className="relative overflow-hidden py-24 border-y border-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${concreteBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />

        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-block text-neon-cyan tracking-[0.3em] text-sm">— {t.home.featuresSub} —</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase mt-3">{t.home.featuresTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featured.map((s, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="group relative bg-card/90 backdrop-blur border border-border p-8 hover:border-neon-pink transition-smooth overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-neon-pink/10 blur-2xl group-hover:bg-neon-pink/40 transition-smooth" />
                  <Icon className="text-neon-pink mb-5 relative" size={40} />
                  <h3 className="font-block text-xl tracking-wide uppercase mb-2 relative">{s.t}</h3>
                  <p className="text-sm text-muted-foreground relative">{s.d}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-neon-orange font-block tracking-[0.2em] uppercase hover:gap-4 transition-all border-b-2 border-neon-orange/40 hover:border-neon-orange pb-1"
            >
              {t.nav.services} — {t.home.seeAll} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — wet paint macro background */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${paintBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/85" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center border-2 border-neon-pink p-12 md:p-16 bg-background/40 backdrop-blur-sm">
            <h2 className="font-display text-4xl md:text-6xl uppercase">{t.home.ctaTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.home.ctaSub}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-neon-pink text-primary-foreground px-8 py-4 font-block tracking-[0.2em] uppercase shadow-neon-pink hover:shadow-[0_0_50px_hsl(var(--neon-pink)/0.8)] transition-smooth"
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

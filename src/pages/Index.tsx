import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Droplets, Wrench, Lightbulb, Car } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import garageBg from "@/assets/garage-bg.jpg";
import showcaseBefore from "@/assets/showcase-before.jpg";
import showcaseAfter from "@/assets/showcase-after.jpg";

const Index = () => {
  const { t } = useLang();
  const icons = [Sparkles, Droplets, Shield, Lightbulb, Wrench, Car];

  return (
    <>
      {/* HERO — graffiti backdrop, content below the centered logo header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 graffiti-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background" />
        <div className="container relative z-10 py-20 md:py-28 text-center">
          <div className="inline-block skew-tag bg-neon-pink px-4 py-1.5 mb-6 animate-flicker">
            <span className="block font-block text-xs tracking-[0.25em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
              {t.home.tagline}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] animate-slide-up">
            <span className="block">{t.home.title1}</span>
            <span className="block text-neon-pink neon-text-pink">{t.home.title2}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            {t.home.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center animate-slide-up">
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

      {/* BEFORE / AFTER SHOWCASE — two photos on garage backdrop */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${garageBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/95" />
        {/* graffiti texture overlay for extra grit */}
        <div className="absolute inset-0 graffiti-bg opacity-10 mix-blend-screen pointer-events-none" />

        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-block text-neon-cyan tracking-[0.3em] text-sm">— {t.gallery.sub} —</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase mt-3 neon-text-pink text-foreground">
              {t.gallery.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {/* BEFORE card */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-neon-cyan/40 blur-2xl opacity-60 group-hover:opacity-100 transition-smooth" />
              <div className="relative overflow-hidden border-2 border-neon-cyan/80 bg-card shadow-card-heavy">
                <img
                  src={showcaseBefore}
                  alt="Car before detailing"
                  className="w-full aspect-[5/4] object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                  width={1280}
                  height={1024}
                />
                <div className="absolute top-4 left-4 skew-tag bg-neon-cyan px-4 py-1.5">
                  <span className="block font-block text-sm tracking-[0.25em] text-background" style={{ transform: "skew(8deg)" }}>
                    {t.gallery.before}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5 pt-14">
                  <p className="font-block text-xs tracking-[0.3em] text-neon-cyan">DAY 01</p>
                  <p className="font-display text-xl uppercase mt-1">Dull · Tired · Forgotten</p>
                </div>
              </div>
            </div>

            {/* AFTER card */}
            <div className="group relative md:translate-y-8">
              <div className="absolute -inset-2 bg-neon-pink/50 blur-2xl opacity-70 group-hover:opacity-100 transition-smooth" />
              <div className="relative overflow-hidden border-2 border-neon-pink bg-card shadow-neon-pink">
                <img
                  src={showcaseAfter}
                  alt="Car after detailing"
                  className="w-full aspect-[5/4] object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                  width={1280}
                  height={1024}
                />
                <div className="absolute top-4 right-4 skew-tag bg-neon-pink px-4 py-1.5 animate-flicker">
                  <span className="block font-block text-sm tracking-[0.25em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
                    {t.gallery.after}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5 pt-14 text-right">
                  <p className="font-block text-xs tracking-[0.3em] text-neon-pink">DAY 02</p>
                  <p className="font-display text-xl uppercase mt-1">Reborn · Glossed · Untouchable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-neon-orange font-block tracking-[0.2em] uppercase hover:gap-4 transition-all"
            >
              {t.nav.gallery} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-block text-neon-cyan tracking-[0.3em] text-sm">— {t.home.featuresSub} —</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase mt-3">{t.home.featuresTitle}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group relative bg-card border border-border p-7 hover:border-neon-pink transition-smooth overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-pink/10 blur-2xl group-hover:bg-neon-pink/30 transition-smooth" />
                <Icon className="text-neon-pink mb-4 relative" size={36} />
                <h3 className="font-block text-xl tracking-wide uppercase mb-2 relative">{s.t}</h3>
                <p className="text-sm text-muted-foreground relative">{s.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="relative overflow-hidden border-2 border-neon-pink p-12 md:p-20 text-center">
          <div className="absolute inset-0 graffiti-bg opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl uppercase">{t.home.ctaTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">{t.home.ctaSub}</p>
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

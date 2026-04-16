import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Droplets, Wrench, Lightbulb, Car } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { Logo } from "@/components/Logo";
import heroCar from "@/assets/hero-car.jpg";
import { BeforeAfter } from "@/components/BeforeAfter";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";

const Index = () => {
  const { t } = useLang();
  const icons = [Sparkles, Droplets, Shield, Lightbulb, Wrench, Car];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 graffiti-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="container relative z-10 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block skew-tag bg-neon-pink px-4 py-1.5 mb-6 animate-flicker">
              <span className="block font-block text-xs tracking-widest text-primary-foreground" style={{ transform: "skew(8deg)" }}>{t.home.tagline}</span>
            </div>
            <Logo className="h-32 md:h-44 mb-6 drop-shadow-[0_0_30px_hsl(var(--neon-pink)/0.5)] animate-slide-up" />
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] animate-slide-up">
              <span className="block">{t.home.title1}</span>
              <span className="block text-neon-pink neon-text-pink">{t.home.title2}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg animate-slide-up">{t.home.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up">
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-neon-pink text-primary-foreground px-7 py-3.5 font-block tracking-wider uppercase shadow-neon-pink hover:shadow-[0_0_50px_hsl(var(--neon-pink)/0.8)] transition-smooth">
                {t.cta.book} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 border-2 border-neon-cyan text-neon-cyan px-7 py-3.5 font-block tracking-wider uppercase hover:bg-neon-cyan hover:text-background transition-smooth">
                {t.nav.gallery}
              </Link>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="absolute -inset-4 bg-gradient-graffiti opacity-50 blur-2xl" />
            <img src={heroCar} alt="Premium car detailing" className="relative rounded border-2 border-border shadow-card-heavy w-full" width={1600} height={1200} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-block text-neon-cyan tracking-widest text-sm">— {t.home.featuresSub} —</p>
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

      {/* SAMPLE BEFORE/AFTER */}
      <section className="bg-card border-y border-border py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-block text-neon-cyan tracking-widest text-sm">— {t.gallery.sub} —</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase mt-3">{t.gallery.title}</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <BeforeAfter before={before1} after={after1} title="Paint Correction & Coating" />
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-neon-pink font-block tracking-wider uppercase hover:gap-4 transition-all">
              {t.nav.gallery} <ArrowRight size={18} />
            </Link>
          </div>
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
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-neon-pink text-primary-foreground px-8 py-4 font-block tracking-wider uppercase shadow-neon-pink hover:shadow-[0_0_50px_hsl(var(--neon-pink)/0.8)] transition-smooth">
              {t.cta.book} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

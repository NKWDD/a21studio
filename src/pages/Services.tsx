import { Sparkles, Shield, Droplets, Wrench, Car, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/contexts/LangContext";

const Services = () => {
  const { t } = useLang();
  const icons = [Sparkles, Droplets, Shield, Wrench, Car, Settings];
  return (
    <>
      <PageHero tag="21STUDIO" title={t.services.title} sub={t.services.sub} />
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group bg-card border border-border p-8 hover:border-neon-orange transition-smooth flex gap-5">
                <div className="shrink-0 w-14 h-14 bg-neon-orange/10 grid place-items-center group-hover:bg-neon-orange transition-smooth">
                  <Icon className="text-neon-orange group-hover:text-primary-foreground transition-smooth" size={26} />
                </div>
                <div>
                  <h3 className="font-block text-2xl tracking-wide uppercase mb-2">{s.t}</h3>
                  <p className="text-muted-foreground">{s.d}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-neon-orange text-primary-foreground px-8 py-4 font-block tracking-wider uppercase shadow-orange transition-smooth">
            {t.cta.quote} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};
export default Services;

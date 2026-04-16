import { PageHero } from "@/components/PageHero";
import { useLang } from "@/contexts/LangContext";
import heroCar from "@/assets/hero-car.jpg";

const About = () => {
  const { t } = useLang();
  return (
    <>
      <PageHero tag="EST. 2021" title={t.about.title} sub={t.about.lead} />
      <section className="container py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={heroCar} alt="Studio" className="relative w-full rounded border-2 border-border shadow-card-heavy" loading="lazy" />
        </div>
        <div>
          <p className="text-lg text-foreground/85 mb-5">{t.about.p1}</p>
          <p className="text-lg text-foreground/85">{t.about.p2}</p>
          <div className="grid grid-cols-3 gap-4 mt-10">
            {t.about.stats.map((s, i) => (
              <div key={i} className="text-center p-4 border border-border bg-card">
                <div className="font-display text-3xl md:text-4xl text-neon-orange">{s.v}</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default About;

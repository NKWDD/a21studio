import { PageHero } from "@/components/PageHero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { useLang } from "@/contexts/LangContext";
import galleryBg from "@/assets/gallery-bg.jpg";
import a1 from "@/assets/after-1.jpg";
import a2 from "@/assets/after-2.jpg";
import a3 from "@/assets/after-3.jpg";
import b1 from "@/assets/before-1.jpg";
import b2 from "@/assets/before-2.jpg";
import b3 from "@/assets/before-3.jpg";

const Gallery = () => {
  const { t } = useLang();
  const items = [
    { before: b1, after: a1, title: "Paint Correction" },
    { before: b2, after: a2, title: "Interior Detail" },
    { before: b3, after: a3, title: "Headlight Restoration" },
    { before: b1, after: a2, title: "Exterior Wash" },
    { before: b2, after: a3, title: "Ceramic Coating" },
    { before: b3, after: a1, title: "Engine Bay" },
  ];
  return (
    <>
      <PageHero tag="SHOWROOM" title={t.gallery.title} sub={t.gallery.sub} />

      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-background/80" aria-hidden />

        <div className="container relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {items.map((it, i) => (
              <figure
                key={i}
                className="group bg-card p-3 pb-5 border border-border shadow-card-heavy hover:border-neon-orange transition-smooth"
              >
                <BeforeAfter before={it.before} after={it.after} title="" />
                <figcaption className="mt-3 px-1 flex items-center justify-between">
                  <span className="font-block text-sm tracking-[0.25em] uppercase text-foreground">{it.title}</span>
                  <span className="font-script text-neon-orange text-lg">21Studio</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;

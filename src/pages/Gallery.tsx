import { PageHero } from "@/components/PageHero";
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
    { img: a1, title: "Paint Correction" },
    { img: a2, title: "Interior Detail" },
    { img: a3, title: "Headlight Restoration" },
    { img: b1, title: "Exterior Wash" },
    { img: b2, title: "Ceramic Coating" },
    { img: b3, title: "Engine Bay" },
  ];
  return (
    <>
      <PageHero tag="SHOWROOM" title={t.gallery.title} sub={t.gallery.sub} />

      <section className="relative overflow-hidden py-20">
        {/* Gritty street wall backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-background/70" aria-hidden />

        <div className="container relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {items.map((it, i) => (
              <figure
                key={i}
                className="group bg-card p-3 pb-5 border border-border shadow-card-heavy hover:border-neon-pink transition-smooth"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-3 right-3 w-6 h-6 grid place-items-center bg-neon-yellow text-background">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
                    </svg>
                  </div>
                </div>
                <figcaption className="mt-3 px-1 flex items-center justify-between">
                  <span className="font-block text-sm tracking-[0.25em] uppercase">{it.title}</span>
                  <span className="font-script text-neon-pink text-lg">21Studio</span>
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

import { PageHero } from "@/components/PageHero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { useLang } from "@/contexts/LangContext";
import b1 from "@/assets/before-1.jpg";
import a1 from "@/assets/after-1.jpg";
import b2 from "@/assets/before-2.jpg";
import a2 from "@/assets/after-2.jpg";
import b3 from "@/assets/before-3.jpg";
import a3 from "@/assets/after-3.jpg";

const Gallery = () => {
  const { t } = useLang();
  const items = [
    { before: b1, after: a1, title: "Paint Correction" },
    { before: b2, after: a2, title: "Interior Detail" },
    { before: b3, after: a3, title: "Headlight Restoration" },
  ];
  return (
    <>
      <PageHero tag="BEFORE / AFTER" title={t.gallery.title} sub={t.gallery.sub} />
      <section className="container py-20 grid md:grid-cols-2 gap-10">
        {items.map((it, i) => (
          <BeforeAfter key={i} {...it} />
        ))}
      </section>
    </>
  );
};
export default Gallery;

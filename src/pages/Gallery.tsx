import { useRef, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/contexts/LangContext";
import galleryBg from "@/assets/gallery-bg.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";

type Item = { src: string; title: string };

const VideoCard = ({ src, title }: Item) => {
  const { t } = useLang();
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className="group bg-card p-3 pb-5 border border-border shadow-card-heavy hover:border-neon-orange transition-smooth">
      <div
        className="relative aspect-[9/16] overflow-hidden border-2 border-foreground/80 cursor-pointer bg-black"
        onClick={toggle}
      >
        <video
          ref={ref}
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          loop
          muted
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <div className="absolute inset-0 grid place-items-center bg-background/30 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-neon-orange grid place-items-center shadow-orange">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 skew-tag bg-neon-orange px-3 py-1 pointer-events-none">
          <span className="block font-block text-[10px] tracking-[0.3em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>
            {t.gallery.before} → {t.gallery.after}
          </span>
        </div>
      </div>
      <figcaption className="mt-3 px-1 flex items-center justify-between">
        <span className="font-block text-sm tracking-[0.25em] uppercase text-foreground">{title}</span>
        <span className="font-script text-neon-orange text-lg">21Studio</span>
      </figcaption>
    </figure>
  );
};

const Gallery = () => {
  const { t } = useLang();
  const items: Item[] = [
    { src: video1, title: "Detailing Transformation" },
    { src: video2, title: "Detailing Transformation" },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {items.map((it, i) => (
              <VideoCard key={i} {...it} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { useLang } from "@/contexts/LangContext";

export const BeforeAfter = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div className="space-y-3">
      {title && <h3 className="font-block text-xl tracking-wider text-neon-orange">{title}</h3>}
      <div
        ref={ref}
        className="relative aspect-[16/9] overflow-hidden border-2 border-foreground/80 select-none cursor-ew-resize shadow-card-heavy"
        onMouseMove={(e: MouseEvent) => e.buttons === 1 && move(e.clientX)}
        onMouseDown={(e: MouseEvent) => move(e.clientX)}
        onTouchMove={(e: TouchEvent) => move(e.touches[0].clientX)}
      >
        <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before}
            alt="before"
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>
        <div className="absolute top-4 left-4 skew-tag bg-foreground px-4 py-1.5 pointer-events-none">
          <span className="block font-block text-sm tracking-[0.3em] text-background" style={{ transform: "skew(8deg)" }}>{t.gallery.before}</span>
        </div>
        <div className="absolute top-4 right-4 skew-tag bg-neon-orange px-4 py-1.5 pointer-events-none">
          <span className="block font-block text-sm tracking-[0.3em] text-primary-foreground" style={{ transform: "skew(8deg)" }}>{t.gallery.after}</span>
        </div>
        <div className="absolute top-0 bottom-0 w-[3px] bg-foreground pointer-events-none" style={{ left: `calc(${pos}% - 1.5px)` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neon-orange grid place-items-center shadow-orange">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M5 4L1 8l4 4M11 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

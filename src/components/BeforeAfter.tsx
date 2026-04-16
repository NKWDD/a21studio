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
      <h3 className="font-block text-xl tracking-wider text-neon-orange">{title}</h3>
      <div
        ref={ref}
        className="relative aspect-[4/3] overflow-hidden rounded border-2 border-border select-none cursor-ew-resize shadow-card-heavy"
        onMouseMove={(e: MouseEvent) => e.buttons === 1 && move(e.clientX)}
        onMouseDown={(e: MouseEvent) => move(e.clientX)}
        onTouchMove={(e: TouchEvent) => move(e.touches[0].clientX)}
      >
        <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
        </div>
        <div className="absolute top-3 left-3 bg-background/85 px-2 py-1 font-block text-xs tracking-widest text-foreground">{t.gallery.before}</div>
        <div className="absolute top-3 right-3 bg-background/85 px-2 py-1 font-block text-xs tracking-widest text-neon-orange">{t.gallery.after}</div>
        <div className="absolute top-0 bottom-0 w-1 bg-foreground pointer-events-none" style={{ left: `calc(${pos}% - 2px)` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neon-orange grid place-items-center shadow-orange">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 4L1 8l4 4M11 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

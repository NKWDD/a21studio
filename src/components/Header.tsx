import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLang();

  const leftLinks = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/services", label: t.nav.services },
    { to: "/gallery", label: t.nav.gallery },
  ];
  const rightLinks = [
    { to: "/pricing", label: t.nav.pricing },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];
  const allLinks = [...leftLinks, ...rightLinks];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "font-block text-sm tracking-[0.2em] uppercase transition-smooth relative py-2",
      isActive
        ? "text-neon-orange after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-neon-orange"
        : "text-foreground/85 hover:text-foreground"
    );

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border">
      {/* Graffiti texture strip across header */}
      <div className="absolute inset-0 graffiti-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/95 pointer-events-none" />

      <div className="container relative">
        {/* Desktop: 3-column grid — nav left | logo center | nav right */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-28 gap-8">
          <nav className="flex items-center justify-end gap-8">
            {leftLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/" className="flex items-center justify-center px-2">
            <Logo className="h-20 xl:h-24 drop-shadow-[0_0_25px_hsl(var(--neon-pink)/0.6)]" />
          </Link>

          <nav className="flex items-center justify-start gap-8">
            {rightLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <LangSwitcher lang={lang} setLang={setLang} />
          </nav>
        </div>

        {/* Mobile bar */}
        <div className="lg:hidden flex items-center justify-between h-20">
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo className="h-12 drop-shadow-[0_0_15px_hsl(var(--neon-pink)/0.5)]" />
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 text-foreground">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden relative border-t border-border bg-background/95 backdrop-blur-lg">
          <nav className="container flex flex-col py-6 gap-4">
            {allLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <LangSwitcher lang={lang} setLang={setLang} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const LangSwitcher = ({ lang, setLang }: { lang: "nl" | "en"; setLang: (l: "nl" | "en") => void }) => (
  <div className="inline-flex border border-border rounded overflow-hidden text-xs font-block tracking-wider ml-2">
    {(["nl", "en"] as const).map((l) => (
      <button
        key={l}
        onClick={() => setLang(l)}
        className={cn(
          "px-3 py-1.5 transition-smooth",
          lang === l ? "bg-neon-pink text-primary-foreground" : "bg-transparent text-foreground/70 hover:text-foreground"
        )}
      >
        {l.toUpperCase()}
      </button>
    ))}
  </div>
);

import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLang();
  const links = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/pricing", label: t.nav.pricing },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "font-block text-sm tracking-wider uppercase transition-smooth relative py-2",
      isActive ? "text-neon-pink" : "text-foreground/80 hover:text-foreground"
    );

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
          <Logo className="h-12 md:h-14 drop-shadow-[0_0_15px_hsl(var(--neon-pink)/0.4)]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LangSwitcher lang={lang} setLang={setLang} />
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <nav className="container flex flex-col py-6 gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
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
  <div className="inline-flex border border-border rounded overflow-hidden text-xs font-block tracking-wider">
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

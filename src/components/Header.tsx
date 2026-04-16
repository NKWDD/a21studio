import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLang();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Services moved into Pricing page; About moved into Footer.
  const leftLinks: { to: string; label: string; end?: boolean }[] = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/gallery", label: t.nav.gallery },
  ];
  const rightLinks: { to: string; label: string; end?: boolean }[] = [
    { to: "/pricing", label: t.nav.pricing },
    { to: "/contact", label: t.nav.contact },
  ];
  const allLinks = [...leftLinks, ...rightLinks];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "font-block text-sm xl:text-base tracking-[0.25em] uppercase transition-smooth relative py-2",
      isActive
        ? "text-neon-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[3px] after:w-8 after:bg-neon-orange"
        : "text-foreground/85 hover:text-foreground"
    );

  // Header is ALWAYS transparent and absolutely-positioned. Each page is
  // responsible for providing the graffiti backdrop behind it (PageHero on
  // inner pages, hero section on home). This keeps the look consistent.
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container relative">
        {/* Desktop: nav LEFT | big arched logo CENTER | nav RIGHT */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-10 pt-6 pb-2">
          <nav className="flex items-center justify-end gap-10 xl:gap-12">
            {leftLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/" className="flex items-center justify-center px-4 relative z-10">
            <Logo />
          </Link>

          <nav className="flex items-center justify-start gap-10 xl:gap-12">
            {rightLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <LangSwitcher lang={lang} setLang={setLang} />
          </nav>
        </div>

        {/* Mobile bar */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            <Logo className="scale-[0.5] origin-left" />
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 text-foreground">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg relative">
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
          lang === l ? "bg-neon-orange text-primary-foreground" : "bg-transparent text-foreground/70 hover:text-foreground"
        )}
      >
        {l.toUpperCase()}
      </button>
    ))}
  </div>
);

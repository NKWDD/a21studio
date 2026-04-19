import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { LogoText } from "./Logo";
import { useLang } from "@/contexts/LangContext";
import { SITE } from "@/lib/site";

// TikTok icon (lucide doesn't ship one)
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.86a8.16 8.16 0 0 0 4.77 1.52V8a4.85 4.85 0 0 1-1.84-1.31z" />
  </svg>
);

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="relative mt-20 border-t border-border bg-card">
      <div className="absolute inset-0 graffiti-bg opacity-5 pointer-events-none" />
      <div className="container relative py-14 grid gap-10 md:grid-cols-3">
        <div>
          <LogoText />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            {t.footer.crafted} Premium auto detailing — Oss.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 grid place-items-center border border-border rounded hover:bg-neon-orange hover:border-neon-orange hover:text-primary-foreground transition-smooth">
              <Instagram size={18} />
            </a>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 grid place-items-center border border-border rounded hover:bg-neon-orange hover:border-neon-orange hover:text-primary-foreground transition-smooth">
              <Facebook size={18} />
            </a>
            <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 grid place-items-center border border-border rounded hover:bg-neon-orange hover:border-neon-orange hover:text-primary-foreground transition-smooth">
              <TikTokIcon />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-block text-lg tracking-wider mb-4 text-neon-orange">NAVIGATIE</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", t.nav.home], ["/gallery", t.nav.gallery],
              ["/pricing", t.nav.pricing], ["/about", t.nav.about], ["/contact", t.nav.contact],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-neon-orange transition-smooth">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-block text-lg tracking-wider mb-4 text-neon-orange">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-neon-orange" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-neon-orange transition-smooth">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-neon-orange" />
              <a href={`mailto:${SITE.email}`} className="hover:text-neon-orange transition-smooth">{SITE.email}</a>
            </li>
            <li>{t.contact.addressVal}</li>
            <li>{t.contact.hoursVal}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} 21STUDIO DETAILING — {t.footer.rights}
      </div>
    </footer>
  );
};

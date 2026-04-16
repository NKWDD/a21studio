import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { LogoText } from "./Logo";
import { useLang } from "@/contexts/LangContext";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="relative mt-20 border-t border-border bg-card">
      <div className="absolute inset-0 graffiti-bg opacity-5 pointer-events-none" />
      <div className="container relative py-14 grid gap-10 md:grid-cols-3">
        <div>
          <LogoText />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            {t.footer.crafted} Premium auto detailing — Amsterdam.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 grid place-items-center border border-border rounded hover:bg-neon-orange hover:border-neon-orange hover:text-primary-foreground transition-smooth">
                <Icon size={18} />
              </a>
            ))}
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
            <li className="flex items-center gap-2"><Phone size={14} className="text-neon-orange" />+31 (0)20 123 4567</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-neon-orange" />hello@21studio.nl</li>
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

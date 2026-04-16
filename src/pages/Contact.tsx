import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/contexts/LangContext";
import { toast } from "sonner";
import asphaltBg from "@/assets/asphalt-bg.jpg";

const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact.sent);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputCls = "w-full bg-input border border-border px-4 py-3 text-foreground focus:border-neon-orange focus:outline-none transition-smooth";

  return (
    <>
      <PageHero tag="GET IN TOUCH" title={t.contact.title} sub={t.contact.sub} />

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${asphaltBg})` }} />
        <div className="absolute inset-0 bg-background/85" />

        <div className="container relative grid lg:grid-cols-5 gap-10">
          <form onSubmit={onSubmit} className="lg:col-span-3 bg-card border border-border p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-block tracking-widest uppercase mb-2 text-neon-orange">{t.contact.name}</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
              </div>
              <div>
                <label className="block text-xs font-block tracking-widest uppercase mb-2 text-neon-orange">{t.contact.phone}</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-block tracking-widest uppercase mb-2 text-neon-orange">{t.contact.email}</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-block tracking-widest uppercase mb-2 text-neon-orange">{t.contact.message}</label>
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls + " resize-none"} />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-neon-orange text-primary-foreground px-8 py-3.5 font-block tracking-wider uppercase shadow-orange hover:shadow-[0_0_50px_hsl(var(--neon-orange)/0.7)] transition-smooth">
              {t.contact.send} <Send size={16} />
            </button>
          </form>
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-display text-3xl uppercase text-neon-orange">{t.contact.info}</h3>
            {[
              { Icon: Phone, label: "+31 (0)20 123 4567" },
              { Icon: Mail, label: "hello@21studio.nl" },
              { Icon: MapPin, label: t.contact.addressVal, head: t.contact.address },
              { Icon: Clock, label: t.contact.hoursVal, head: t.contact.hours },
            ].map(({ Icon, label, head }, i) => (
              <div key={i} className="flex gap-4 bg-card border border-border p-5">
                <div className="shrink-0 w-10 h-10 grid place-items-center bg-neon-orange/10 text-neon-orange">
                  <Icon size={18} />
                </div>
                <div>
                  {head && <div className="text-xs uppercase tracking-widest text-muted-foreground font-block">{head}</div>}
                  <div className="text-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;

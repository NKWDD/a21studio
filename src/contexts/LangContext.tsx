import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "@/i18n/translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: typeof translations.nl };
const LangContext = createContext<Ctx | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("nl");
  return <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be inside LangProvider");
  return ctx;
};

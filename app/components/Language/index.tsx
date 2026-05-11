"use client";
import { createContext, useContext, useState } from "react";

type Lang = "pt" | "en";

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

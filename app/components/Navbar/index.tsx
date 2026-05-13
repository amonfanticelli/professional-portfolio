"use client";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLang } from "../../components/Language/index";

export const Navbar = () => {
  const { lang, toggle } = useLang();

  const labels = {
    pt: {
      sobre: "Sobre",
      ferramentas: "Ferramentas",
      projetos: "Projetos",
      contato: "Contato",
    },
    en: {
      sobre: "About",
      ferramentas: "Tools",
      projetos: "Projects",
      contato: "Contact",
    },
  };

  const t = labels[lang];

  return (
    <nav className="sticky top-0 bg-white/85 backdrop-blur-[20px] border-b border-pink-300/10 z-100 transition-all w-full">
      <div className="max-lg:gap-3.5 max-lg:flex-col flex items-center justify-between py-3.75 px-5 max-w-300 mx-auto">
        <div className="max-lg:gap-3.5 flex gap-10 flex-wrap justify-center">
          <a
            href="#sobre"
            className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
          >
            {t.sobre}
          </a>
          <a
            href="#ferramentas"
            className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
          >
            {t.ferramentas}
          </a>
          <a
            href="#projetos"
            className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
          >
            {t.projetos}
          </a>
          <a
            href="#contato"
            className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
          >
            {t.contato}
          </a>
        </div>

        <div className="flex gap-3.75 items-center">
          <button
            onClick={toggle}
            className="text-gray-600 text-[0.8rem] font-bold transition-all h-10 px-3 flex items-center justify-center rounded-full bg-white shadow-sm duration-300 hover:bg-[#667eea] hover:text-white hover:shadow-(--shadow-glow) hover:-translate-y-0.75 tracking-wide cursor-pointer"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <a
            href="https://github.com/amonfanticelli"
            target="_blank"
            title="GitHub"
            className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm duration-300 hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amon-fanticelli/"
            target="_blank"
            title="LinkedIn"
            className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm duration-300 hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:amonfanticelli@gmail.com"
            title="Email"
            className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm duration-300 hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </nav>
  );
};

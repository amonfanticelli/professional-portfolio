"use client";
import { useLang } from "../../components/Language/index";
import profileImage from "../../assets/profile-image.jpg";
import Image from "next/image";

export const Header = () => {
  const { lang } = useLang();

  const t = {
    pt: {
      role: "Engenheiro de Software • Full Stack • E-commerce",
      bio: "Mais de 3 anos desenvolvendo aplicações web completas do front-end com React e Next.js ao back-end com Node.js e PostgreSQL, incluindo projetos em VTEX IO e VTEX FastStore.",
      projects: "PROJETOS",
      technologies: "TECNOLOGIAS",
      experience: "ANOS EXP.",
    },
    en: {
      role: "Software Engineer • Full Stack • E-commerce",
      bio: "Over 3 years building complete web applications from front-end with React and Next.js to back-end with Node.js and PostgreSQL, including e-commerce projects with VTEX IO and FastStore.",
      projects: "PROJECTS",
      technologies: "TECHNOLOGIES",
      experience: "YEARS EXP.",
    },
  }[lang];

  return (
    <header
      className="
            max-lg:pt-5
            relative
            overflow-hidden
            max-lg:h-auto         
            max-lg:pb-18
            py-20
            [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]
            h-135.25
          "
    >
      <div className="max-lg:justify-center max-w-300 mx-auto px-5 w-full relative z-10 flex items-center justify-between flex-wrap gap-10">
        <div className="flex items-center flex-col lg:flex-row gap-8">
          <div className="max-h-36 relative shrink-0 gap-8 profile-image-container">
            <Image
              src={profileImage}
              alt="Amon Fanticelli"
              width={140}
              height={140}
              className="w-35 h-35 rounded-full border-4 border-white/40 object-cover shadow-2xl bg-white profile-image"
            />
          </div>

          <div className="max-lg:items-center flex flex-col max-w-lg">
            <h1
              style={{ transitionDelay: "0ms" }}
              className="max-lg:text-4xl max-lg:text-center text-5xl font-bold mb-3 break-normal text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.1)] reveal"
            >
              Amon Fanticelli
            </h1>
            <span
              style={{ transitionDelay: "200ms" }}
              className="max-lg:text-center max-lg:rounded-2xl max-w-max text-[1.4rem] text-white/95 mb-3 font-semibold inline-block bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm reveal"
            >
              {t.role}
            </span>
            <span
              style={{ transitionDelay: "400ms" }}
              className="max-lg:text-center text-[1.1rem] text-white/90 max-w-125 leading-relaxed reveal"
            >
              {t.bio}
            </span>
          </div>
        </div>

        <div
          style={{ transitionDelay: "600ms" }}
          className="max-lg:gap-3.5 justify-center flex-wrap flex flex-row gap-6 reveal"
        >
          <div className="max-lg:px-2.5 max-lg:py-3.75 origin-center will-change-transform text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default flex-1 min-w-30 flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            <span className="block text-[2.8rem] font-bold text-white leading-none">
              15+
            </span>
            <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
              {t.projects}
            </span>
          </div>
          <div className="max-lg:px-2.5 max-lg:py-3.75 origin-center will-change-transform text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default flex-1 min-w-43 flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            <span className="block text-[2.8rem] font-bold text-white leading-none">
              12+
            </span>
            <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
              {t.technologies}
            </span>
          </div>
          <div className="max-lg:px-2.5 max-lg:py-3.75 origin-center will-change-transform min-w-30 flex-1 text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            <span className="block text-[2.8rem] font-bold text-white leading-none">
              3+
            </span>
            <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
              {t.experience}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

"use client";
import profileImage from "./assets/profile-image.jpg";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  useReveal();
  return (
    <>
      <header
        className="
        relative
        overflow-hidden
        py-20
        [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]
        h-[541px]
      "
      >
        <div className="max-w-300 mx-auto px-5 w-full relative z-10 flex items-center justify-between flex-wrap gap-10">
          <div className="flex flex-row gap-8">
            <div className="max-h-36 relative shrink-0 gap-8 profile-image-container">
              <Image
                src={profileImage}
                alt="Amon Fanticelli"
                width={140}
                height={140}
                className="
                w-35
                h-35
                rounded-full
                border-4
                border-white/40
                object-cover
                shadow-2xl
                bg-white
                profile-image
                "
              />
            </div>

            <div className="flex flex-col max-w-lg">
              <h1
                style={{ transitionDelay: "0ms" }}
                className=" text-5xl font-bold mb-3 break-normal text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.1)] reveal"
              >
                Amon Fanticelli
              </h1>
              <span
                style={{ transitionDelay: "200ms" }}
                className=" max-w-max text-[1.4rem] text-white/95 mb-3 font-semibold inline-block bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm reveal"
              >
                {" "}
                Dev Full-Stack • Data Science • Game Dev{" "}
              </span>
              <span
                style={{ transitionDelay: "400ms" }}
                className=" text-[1.1rem] text-white/90 max-w-[500px] leading-relaxed reveal"
              >
                De jogos interativos a pipelines de dados e aplicações web
                completas — construo soluções criativas que combinam código
                limpo, design inteligente e análise robusta.
              </span>
            </div>
          </div>

          <div
            style={{ transitionDelay: "600ms" }}
            className="justify-center flex-wrap flex flex-row gap-6 reveal"
          >
            <div className="text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default flex-1 min-w-30 flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
              <span className="block text-[2.8rem] font-bold text-white leading-none">
                16+
              </span>
              <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
                PROJETOS
              </span>
            </div>
            <div className="text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default flex-1 min-w-30 flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
              <span className="block text-[2.8rem] font-bold text-white leading-none">
                9+
              </span>
              <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
                TECNOLOGIAS
              </span>
            </div>
            <div className="text-center bg-white/15 px-7.5 py-5 rounded-lg backdrop-blur-md border border-white/30 transition-all duration-400 cursor-default flex-1 min-w-30 flex flex-col hover:-translate-y-1.25 hover:scale-[1.05] hover:bg-white/25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
              <span className="block text-[2.8rem] font-bold text-white leading-none">
                3+
              </span>
              <span className="text-[0.85rem] text-white/90 uppercase tracking-[1.5px] mt-2 font-semibold">
                ANOS EXP.
              </span>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white/85 backdrop-blur-[20px] border-b border-pink-300/10 relative z-100 transition-all w-full">
        <div className="flex items-center justify-between py-3.75 px-5 max-w-300 mx-auto">
          <div className="flex gap-10 flex-wrap justify-center">
            <a
              href="#sobre"
              className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
            >
              Sobre
            </a>
            <a
              href="#ferramentas"
              className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
            >
              Ferramentas
            </a>
            <a
              href="#projetos"
              className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="nav-link text-gray-600 no-underline font-semibold text-base relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#667eea]"
            >
              Contato
            </a>
          </div>

          <div className="flex gap-3.75">
            <a
              href="https://github.com/seuuser"
              target="_blank"
              title="GitHub"
              className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover: duration-300 hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/seuuser"
              target="_blank"
              title="LinkedIn"
              className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover: duration-300 hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:seuemail@gmail.com"
              title="Email"
              className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover: duration-300
     hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

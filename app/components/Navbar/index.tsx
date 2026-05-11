import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="bg-white/85 backdrop-blur-[20px] border-b border-pink-300/10 relative z-100 transition-all w-full">
      <div className="max-lg:gap-3.5 max-lg:flex-col flex items-center justify-between py-3.75 px-5 max-w-300 mx-auto">
        <div className="max-lg:gap-3.5 flex gap-10 flex-wrap justify-center">
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
            className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm  duration-300 hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:amonfanticelli@gmail.com"
            title="Email"
            className="text-gray-600 text-[1.2rem] transition-all w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm duration-300
         hover:bg-[#667eea] hover:shadow-(--shadow-glow) hover:-translate-y-0.75 hover:rotate-[8deg] hover:text-white"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </nav>
  );
};

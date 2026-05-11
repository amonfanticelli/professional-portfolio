import { FaCode, FaCogs, FaLayerGroup, FaMobileAlt } from "react-icons/fa";

export const About = () => {
  return (
    <section id="sobre" className="py-24 w-full relative">
      <div className="mx-auto max-w-[1200] px-5 w-full">
        <h2 className="text-center reveal mb-3.5 text-white font-bold text-4xl">
          Sobre Mim
        </h2>
        <div className=" reveal">
          <p className="text-[1.15rem] text-white mb-6 leading-[1.8] text-justify">
            Desenvolvedora versátil com experiência em desenvolvimento de jogos
            (Pygame), análise de dados (Python, R, SQL) e aplicações full-stack.
            Gosto de explorar desde algoritmos visuais e gráficos interativos
            até modelagem preditiva e dashboards analíticos.
          </p>
          <p className="text-[1.15rem] text-white mb-6 leading-[1.8] text-justify">
            Desenvolvedora versátil com experiência em desenvolvimento de jogos
            (Pygame), análise de dados (Python, R, SQL) e aplicações full-stack.
            Gosto de explorar desde algoritmos visuais e gráficos interativos
            até modelagem preditiva e dashboards analíticos.
          </p>

          <div className="flex flex-wrap gap-5 ">
            <div className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300  hover:-translate-y-1.25 hover:border-[#ff6b9d] ">
              <div className="animate-[bounceSubtle_2s_infinite]">
                <FaCode />
              </div>

              <span>Full Stack Dev</span>
            </div>
            <div className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300  hover:-translate-y-1.25 hover:border-[#ff6b9d] ">
              <div className="animate-[bounceSubtle_2s_infinite]">
                <FaCogs />
              </div>

              <span>Engenheiro de software</span>
            </div>
            <div className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300  hover:-translate-y-1.25 hover:border-[#ff6b9d] ">
              <div className="animate-[bounceSubtle_2s_infinite]">
                <FaLayerGroup />
              </div>

              <span>Analise e desenvolvimento de sistemas</span>
            </div>
            <div className="skill-item flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[rgba(255,107,157,0.15)] transition-all duration-300  hover:-translate-y-1.25 hover:border-[#ff6b9d] ">
              <div className="animate-[bounceSubtle_2s_infinite]">
                <FaMobileAlt />
              </div>

              <span>Mobile Apps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

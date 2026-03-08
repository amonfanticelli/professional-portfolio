"use client";
import profileImage from "./assets/profile-image.jpg";
import Image from "next/image";
import { useReveal } from "./components/useReveal";

export default function Home() {
   useReveal()
  return (
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
          <div className="relative shrink-0 gap-8 profile-image-container">
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
            <h1  style={{ transitionDelay: "0ms" }}className=" text-5xl font-bold mb-3 break-normal text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.1)] reveal" >Amon Fanticelli</h1>
            <span  style={{ transitionDelay: "200ms" }} className=" max-w-max text-[1.4rem] text-white/95 mb-3 font-semibold inline-block bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm reveal"> Dev Full-Stack • Data Science • Game Dev </span>
            <span style={{ transitionDelay: "400ms" }} className="reveal" >
              De jogos interativos a pipelines de dados e aplicações web
              completas — construo soluções criativas que combinam código limpo,
              design inteligente e análise robusta.
            </span>
          </div>
        </div>

        <div className=""></div>
      </div>
    </header>
  );
}

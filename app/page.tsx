import profileImage from "./assets/profile-image.jpg";
import Image from "next/image";

export default function Home() {
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
        <div className="flex flex-row">
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

          <div className="flex flex-col">
            <h1>Amon Fanticelli</h1>
            <span> Dev Full-Stack • Data Science • Game Dev </span>
            <span>
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

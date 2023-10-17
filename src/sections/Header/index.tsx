import { Button } from "@/components/Button";
import { TitleDisplay } from "@/components/Titles/TitleDisplay";

export function Header() {
  return (
    <header className="container relative z-10 flex min-h-screen flex-col items-center justify-center gap-12">
      <h1 className="justify-self-start text-center text-sm font-bold uppercase text-white md:text-base">
        Qual a soft skill mais importante?
      </h1>
      <TitleDisplay>Comunicação</TitleDisplay>
      <p className="w-full text-center text-base md:text-xl lg:w-3/5">
        Saber se comunicar bem, é a melhor skill que todo profissional deveria
        ter. E aqui eu resolvi falar de uma ferramenta para se ter uma boa
        comunicação:{" "}
        <strong className="text-white">a comunicação assíncrona</strong>.
      </p>

      <Button className="relative font-medium" scroll={{ to: "start" }}>
        Como fazer isso?
        <div className="absolute h-4 w-4 animate-ping-slow rounded-full bg-blue-500 opacity-60"></div>
      </Button>
    </header>
  );
}

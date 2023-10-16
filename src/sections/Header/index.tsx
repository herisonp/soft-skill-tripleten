import { Button } from "@/components/Button";
import { TitleDisplay } from "@/components/Titles/TitleDisplay";
import { Button as ButtonScroll } from "react-scroll";

export function Header() {
	return (
		<header className="z-10 relative container flex flex-col items-center justify-center min-h-screen gap-12">
			<h1 className="text-white text-center text-sm md:text-base font-bold uppercase justify-self-start">
				Qual a soft skill mais importante?
			</h1>
			<TitleDisplay>Comunicação</TitleDisplay>
			<p className="text-center w-full lg:w-2/3 text-base md:text-xl">
				Saber se comunicar bem, é a melhor skill que todo profissional deveria
				ter. E aqui eu resolvi falar de uma ferramenta para se ter uma boa
				comunicação:{" "}
				<strong className="text-white">a comunicação assíncrona</strong>.
			</p>

			<Button scroll={{ to: "start" }}>Como fazer isso?</Button>
		</header>
	);
}

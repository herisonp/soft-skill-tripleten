import { Button } from "@/components/Button";
import { TitleDisplay } from "@/components/Titles/TitleDisplay";

export function Header() {
	return (
		<header className="container flex flex-col items-center justify-center min-h-screen gap-12">
			<h1 className="text-white text-base font-bold uppercase justify-self-start">
				Qual a soft skill mais importante?
			</h1>
			<TitleDisplay>Comunicação</TitleDisplay>
			<p className="text-center text-xl">
				Saber se comunicar bem, é a melhor skill que todo profissional deveria
				ter. E aqui eu resolvi falar de uma ferramenta para se ter uma boa
				comunicação:{" "}
				<strong className="text-white">a comunicação assíncrona</strong>.
			</p>

			<Button>Como fazer isso?</Button>
		</header>
	);
}

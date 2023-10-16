import { About } from "@/sections/About";
import { Author } from "@/sections/Author";
import { Header } from "@/sections/Header";
import { NoUse } from "@/sections/NoUse";
import { Use } from "@/sections/Use";

export default function Home() {
	return (
		<div className="w-full min-h-screen bg-black text-zinc-400">
			<Header />
			<NoUse />
			<Use />
			<About />
			<Author />
			<footer className="container py-4">
				<p className="text-center">Todos os direitos reservados.</p>
			</footer>
		</div>
	);
}

import { About } from "@/sections/About";
import { Author } from "@/sections/Author";
import { Header } from "@/sections/Header";
import { NoUse } from "@/sections/NoUse";
import { Use } from "@/sections/Use";
export default function Home() {
	return (
		<div className="relative w-full min-h-scree bg-black text-zinc-400 overflow-hidden before:absolute before:h-[350px] before:w-[350px] before:blur-[200px] before:md:h-[600px] before:md:w-[600px] before:md:blur-[375px] before:bg-blue-500 before:rounded-full  before:top-0 before:left-0 before:-translate-x-1/2 before:-translate-y-1/4 after:absolute after:h-[350px] after:w-[350px] after:blur-[200px] after:md:h-[600px] after:md:w-[600px] after:md:blur-[375px] after:bg-blue-500 after:rounded-full  after:top-[100vh] after:right-0 after:translate-x-1/2 after:translate-y-1/4">
			<Header />
			<NoUse />
			<Use />
			<About />
			<Author />
			<footer className="py-4 bg-neutral-950">
				<p className="text-center">Todos os direitos reservados.</p>
			</footer>
		</div>
	);
}

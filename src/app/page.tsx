import { About } from "@/sections/About";
import { Author } from "@/sections/Author";
import { Header } from "@/sections/Header";
import { NoUse } from "@/sections/NoUse";
import { Use } from "@/sections/Use";
export default function Home() {
  return (
    <div className="min-h-scree relative w-full overflow-hidden bg-black text-zinc-400 before:absolute before:left-0 before:top-0 before:h-[350px] before:w-[350px] before:-translate-x-1/2 before:-translate-y-1/4 before:rounded-full before:bg-blue-500  before:blur-[200px] after:absolute after:right-0 after:top-[100vh] after:h-[350px] after:w-[350px] after:translate-x-1/2 after:translate-y-1/4 after:rounded-full after:bg-blue-500 after:blur-[200px] before:md:h-[600px] before:md:w-[600px]  before:md:blur-[375px] after:md:h-[600px] after:md:w-[600px] after:md:blur-[375px]">
      <Header />
      <NoUse />
      <Use />
      <About />
      <Author />
      <footer className="bg-neutral-950 py-4">
        <p className="text-center">Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

import Image from "next/image";

type TechnologyProps = {
	src: string;
	title: string;
};

export function Technology({ src, title }: TechnologyProps) {
	return (
		<li className="p-6 bg-neutral-950 rounded-2xl border border-stone-900 hover:border-blue-500 flex flex-col justify-center items-center gap-4 hover:scale-110 transition-all">
			<Image src={src} alt="" width={40} height={40} className="w-10 h-auto" />
			<p className="text-zinc-500 text-sm font-normal">{title}</p>
		</li>
	);
}

import Image from "next/image";

type TechnologyProps = {
	src: string;
	title: string;
};

export function Technology({ src, title }: TechnologyProps) {
	return (
		<li className="p-8 bg-neutral-950 rounded-2xl border border-stone-900 hover:border-white flex flex-col justify-center items-center gap-4 transition-colors">
			<Image src={src} alt="" width={40} height={40} />
			<p className="text-zinc-500 text-base font-normal">{title}</p>
		</li>
	);
}

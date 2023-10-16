export function TitleDisplay({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 text-4xl sm:text-5xl text-center md:text-7xl font-black tracking-tighter">
			{children}
		</h2>
	);
}

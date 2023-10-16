export function TitleDisplay({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter">
			{children}
		</h2>
	);
}

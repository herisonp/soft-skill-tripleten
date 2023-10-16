export function Section({ children }: { children: React.ReactNode }) {
	return (
		<section className="py-16 flex flex-col items-center justify-center gap-16">
			{children}
		</section>
	);
}

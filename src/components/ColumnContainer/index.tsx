export function ColumnContainer({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex container flex-wrap justify-between gap-10">
			{children}
		</div>
	);
}

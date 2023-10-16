import { cn } from "@/lib/utils";

type SectionProps = {
	children: React.ReactNode;
	id?: string;
	className?: string;
};

export function Section({ children, id, className }: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				"relative z-10 py-8 md:py-16 flex flex-col items-center justify-center gap-16",
				className
			)}
		>
			{children}
		</section>
	);
}

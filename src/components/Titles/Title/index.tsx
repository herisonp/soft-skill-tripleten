import { cn } from "@/lib/utils";

type TitleProps = {
	children: React.ReactNode;
	className?: string;
};

export function Title({ children, className }: TitleProps) {
	return (
		<h2
			className={cn(
				"bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 text-5xl font-black tracking-tighter",
				className
			)}
		>
			{children}
		</h2>
	);
}

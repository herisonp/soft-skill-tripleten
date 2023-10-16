import { cn } from "@/lib/utils";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type?: "link" | "";
	href?: string;
	blank?: boolean;
	variant?: "primary" | "secundary";
};

export function Button({
	children,
	className,
	href,
	type,
	blank,
	variant = "primary"
}: ButtonProps) {
	const primary = "bg-white hover:bg-zinc-300 text-stone-900";
	const secundary = "bg-neutral-800 hover:bg-neutral-900 text-white";

	return (
		<>
			{type === "link" ? (
				<a
					className={cn(
						variant === "primary" ? primary : secundary,
						"rounded-lg font-medium p-4 text-xl flex justify-center items-center gap-2.5 w-fit",
						className
					)}
					href={href}
					target={blank ? "_blank" : "_self"}
				>
					{children}
				</a>
			) : (
				<>
					<button
						className={cn(
							variant === "primary" ? primary : secundary,
							"rounded-lg font-medium p-4 text-xl flex justify-center items-center gap-2.5",
							className
						)}
					>
						{children}
					</button>
				</>
			)}
		</>
	);
}

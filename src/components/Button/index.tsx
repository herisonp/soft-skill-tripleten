"use client";
import { cn } from "@/lib/utils";
import { Button as ButtonScroll } from "react-scroll";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	href?: string;
	blank?: boolean;
	type?: "link" | "button";
	variant?: "primary" | "secundary";
	width?: "default" | "full";
	scroll?: {
		to: string;
		duration?: number;
	};
};

const buttonVariants = {
	base: "rounded-lg p-4 flex justify-center items-center gap-2.5 transition-all hover:scale-105",
	variant: {
		primary: "bg-white hover:bg-zinc-300 text-stone-900",
		secundary: "bg-neutral-800 hover:bg-neutral-900 text-white"
	},
	width: {
		default: "w-fit",
		full: "w-full"
	},
	type: {
		button: "",
		link: "w-fit"
	}
};

export function Button({
	children,
	className,
	href,
	blank,
	scroll = {
		duration: 500,
		to: ""
	},
	type = "button",
	variant = "primary",
	width = "default"
}: ButtonProps) {
	return (
		<>
			{scroll.to ? (
				<ButtonScroll
					className={cn(
						buttonVariants.base,
						buttonVariants.variant[variant],
						buttonVariants.width[width],
						buttonVariants.type[type],
						className
					)}
					to={scroll.to}
					smooth={true}
					duration={scroll.duration}
				>
					{children}
				</ButtonScroll>
			) : (
				<>
					{type === "link" ? (
						<a
							className={cn(
								buttonVariants.base,
								buttonVariants.variant[variant],
								buttonVariants.width[width],
								buttonVariants.type[type],
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
									buttonVariants.base,
									buttonVariants.variant[variant],
									buttonVariants.width[width],
									buttonVariants.type[type],
									className
								)}
							>
								{children}
							</button>
						</>
					)}
				</>
			)}
		</>
	);
}

import { cn } from "@/lib/utils";
import Image from "next/image";

export function EllipseBlur({ className }: { className?: string }) {
	return (
		<div className={cn("absolute top-0 left-0 z-0 w-screen", className)}>
			<Image
				src="/ellipse-blur.svg"
				alt=""
				width={700}
				height={700}
				className="w-full"
			/>
		</div>
	);
}

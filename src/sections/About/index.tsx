import { Button } from "@/components/Button";
import { ColumnContainer } from "@/components/ColumnContainer";
import { ColumnContanierItem } from "@/components/ColumnContainer/ColumnContainerItem";
import { Section } from "@/components/Section";
import { Technology } from "@/components/Technology";
import { Text } from "@/components/Texts/Text";
import { TextBox } from "@/components/Texts/TextBox";
import { Subtitle } from "@/components/Titles/Subtitle";
import { Title } from "@/components/Titles/Title";
import Image from "next/image";

const technologies = [
	{
		title: "Figma",
		src: "/figma.svg"
	},
	{
		title: "React",
		src: "/react.svg"
	},
	{
		title: "Next.js",
		src: "/nextjs.svg"
	},
	{
		title: "Typescript",
		src: "/typescript.svg"
	},
	{
		title: "Tailwindcss",
		src: "/tailwind.svg"
	},
	{
		title: "Vercel",
		src: "/vercel.svg"
	}
];

export function About() {
	return (
		<Section>
			<div className="container md:text-center">
				<Title>Saiba mais sobre este projeto</Title>
			</div>
			<ColumnContainer>
				<ColumnContanierItem>
					<Image
						src="/tripleten.svg"
						alt="Logo da empresa TripleTen"
						width={178}
						height={40}
						className="mb-8"
					/>
					<TextBox>
						<Text>
							Sou aluno de desenvolvimento web na{" "}
							<a
								href="https://tripleten.com"
								target="_blank"
								className="font-bold text-white hover:text-zinc-300"
							>
								TripleTen
							</a>
							. E este foi um desafio proposto por{" "}
							<a
								href="https://www.linkedin.com/in/luizancgarcia/"
								target="_blank"
								className="font-bold text-white hover:text-zinc-300"
							>
								Luiza Costa
							</a>
							, nossa gestora de carreira, para desenvolver <i>any</i> com o
							tema sobre a melhor soft skill, com um prazo de 7 dias.
						</Text>
					</TextBox>
					<Button
						type="link"
						variant="secundary"
						href="https://github.com/herisonp/soft-skill-tripleten"
						blank
						className="mt-8"
					>
						<Image src="/github.svg" width={24} height={24} alt="" />
						Repositório do GitHub
					</Button>
				</ColumnContanierItem>
				<ColumnContanierItem>
					<Subtitle>Tecnologias utilizadas</Subtitle>
					<ul className="grid grid-cols-3 max-md:grid-cols-2 gap-6 mt-7">
						{technologies.map((tech) => (
							<Technology key={tech.title} title={tech.title} src={tech.src} />
						))}
					</ul>
				</ColumnContanierItem>
			</ColumnContainer>
		</Section>
	);
}

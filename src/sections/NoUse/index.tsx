import { ColumnContainer } from "@/components/ColumnContainer";
import { ColumnContanierItem } from "@/components/ColumnContainer/ColumnContainerItem";
import { Section } from "@/components/Section";
import { Text } from "@/components/Texts/Text";
import { TextBox } from "@/components/Texts/TextBox";
import { Title } from "@/components/Titles/Title";
import Image from "next/image";

export function NoUse() {
	return (
		<Section id="start">
			<div className="container md:text-center">
				<Title>Veja como é simples</Title>
			</div>
			<ColumnContainer>
				<ColumnContanierItem>
					<TextBox>
						<Text>
							Na maioria das situações, o desenvolvedor vai precisar se
							comunicar digitalmente com os demais membros da equipe de
							trabalho. E saber como lidar da melhor forma com isso, é
							extremamente importante para conseguir ter uma comunicação rápida
							e objetiva.
						</Text>
						<Text>
							A recomendação aqui é seguir o estilo de{" "}
							<strong className="text-white">comunicação assíncrona</strong>.
						</Text>
					</TextBox>
				</ColumnContanierItem>
				<ColumnContanierItem>
					<Image
						src="/chat-nouse.svg"
						alt="Demonstração de uma conversa em um chat web, de uma má comunicação"
						width={564}
						height={345}
						className="w-full mb-8"
					/>
					<TextBox>
						<Text>
							Dessa forma síncrona, temos que esperar a resposta do outro, para
							então dizer o que queremos. Isso pode acabar atrasando ainda mais
							a sua resposta, visto que a pessoa ainda vai precisar te sinalizar
							que você já pode falar.
						</Text>
					</TextBox>
				</ColumnContanierItem>
			</ColumnContainer>
		</Section>
	);
}

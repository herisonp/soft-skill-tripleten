import { ColumnContainer } from "@/components/ColumnContainer";
import { ColumnContanierItem } from "@/components/ColumnContainer/ColumnContainerItem";
import { Section } from "@/components/Section";
import { Text } from "@/components/Texts/Text";
import { TextBox } from "@/components/Texts/TextBox";
import Image from "next/image";

export function Use() {
	return (
		<Section>
			<ColumnContainer>
				<ColumnContanierItem>
					<Image
						src="/chat-use.svg"
						alt="Demonstração de uma conversa em um chat web, de uma comunicação assíncrona"
						width={564}
						height={345}
						className="w-full mb-8"
					/>
				</ColumnContanierItem>
				<ColumnContanierItem>
					<TextBox>
						<Text>
							Perceba que desta maneira, João quando ver sua mensagem já vai
							saber tudo do que se trata, e já vai te responder o que você
							precisa saber. E olhe, Lucas responde prontamente depois de já ter
							todas as informações e com apenas 2 trocas de mensagens, eles já
							resolveram todas as questões.
						</Text>
						<Text>
							No mundo de trabalhar remotamente, cada pessoa tem sua rotina,
							seus compromissos pessoais e tarefas em casa, não apresse a
							resposta, aguarde e antecipe o máximo de informação possível em
							uma única mensagem, para o assunto fluir mais rápido e objetivo.
						</Text>
					</TextBox>
				</ColumnContanierItem>
			</ColumnContainer>
		</Section>
	);
}

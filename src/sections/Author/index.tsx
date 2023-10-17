import { Button } from "@/components/Button";
import { ColumnContainer } from "@/components/ColumnContainer";
import { ColumnContanierItem } from "@/components/ColumnContainer/ColumnContainerItem";
import { Section } from "@/components/Section";
import { Text } from "@/components/Texts/Text";
import { TextBox } from "@/components/Texts/TextBox";
import { Title } from "@/components/Titles/Title";
import Image from "next/image";

export function Author() {
  return (
    <Section className="bg-neutral-950">
      <ColumnContainer>
        <ColumnContanierItem>
          <Title>
            É um recrutador e curtiu o projeto? O que lhe falta para me
            contratar? <span className="text-white">🤔</span>
          </Title>
          <Button
            type="link"
            href="https://wa.me/5522981034342"
            className="my-9"
            blank
          >
            <Image
              src="/whatsapp.svg"
              alt="ícone do WhatsApp"
              width={24}
              height={24}
            />
            Contratar agora
          </Button>
          <ul className="flex w-full flex-wrap gap-5">
            <li>
              <a
                href="https://www.linkedin.com/in/herison/"
                className="flex gap-2 text-zinc-500 hover:text-zinc-200"
              >
                <Image
                  src="/linkedin.svg"
                  alt="ícone do Linkedin"
                  width={24}
                  height={24}
                />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5522981034342"
                className="flex gap-2 text-zinc-500 hover:text-zinc-200"
                target="_blank"
              >
                <Image
                  src="/whatsapp-white.svg"
                  alt="ícone do WhatsApp"
                  width={24}
                  height={24}
                />
                (22) 98103-4342
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@herisonpereira.com.br"
                className="flex gap-2 text-zinc-500 hover:text-zinc-200"
              >
                <Image
                  src="/email.svg"
                  alt="ícone de email"
                  width={24}
                  height={24}
                />
                contato@herisonpereira.com.br
              </a>
            </li>
          </ul>
        </ColumnContanierItem>
        <ColumnContanierItem className="max-md:mt-8">
          <div className="mb-8 flex items-center gap-8">
            <Image
              src="/avatar-herison.png"
              alt="Foto de Herison Pereira"
              width={220}
              height={220}
              className="w-32"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">Herison Pereira</h2>
              <p className="text-base font-normal text-zinc-500">
                Dev front-end jr. | Meta: Full Stack
              </p>
            </div>
          </div>
          <TextBox>
            <Text>
              Sou <strong className="text-white">Herison</strong>, tenho 29 anos
              e estou em transição de carreira, desenvolvedor front-end em
              construção com a meta de ser Full Stack.
            </Text>
          </TextBox>
        </ColumnContanierItem>
      </ColumnContainer>
    </Section>
  );
}

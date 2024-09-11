"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "LuxeCars",
    description:
      "Alugue os carros mais exclusivos e viva momentos inesquecíveis a bordo de máquinas surreais",
    image: "/cars.png",
    liveLink: "https://luxecars.vercel.app/",
    githubLink: "https://github.com/canutoilberto/luxecars",
  },
  {
    title: "TravelSite",
    description:
      "Um site de viagens completo, feito com o que de mais moderno na tecnoligia",
    image: "/travel.png",
    liveLink: "https://travel-site-sable.vercel.app/",
    githubLink: "https://github.com/canutoilberto/travel-site",
  },
  {
    title: "MockBlogg",
    description:
      "Um modelo de e-commerce que serve perfeitamente para o seu negócio dominar a internet.",
    image: "/mockblogg.png",
    liveLink: "https://mockblog-two.vercel.app/",
    githubLink: "https://github.com/canutoilberto/Mockblog",
  },
  {
    title: "Jubileu Pizza",
    description:
      "Aplicativo prático para pedidos de pizzaria, oferecendo personalização, rastreamento em tempo real e pagamento seguro diretamente no app.",
    image: "/jubileu.png",
    liveLink: "https://jubileu-pizza.vercel.app/",
    githubLink: "https://github.com/canutoilberto/jubileu-pizza",
  },
  {
    title: "O que Deseja?",
    description:
      "Exemplo de PWA que se integra perfeitamente para serviços de pedidos.",
    image: "/pwa.png",
    liveLink: "https://order-app-eta-ten.vercel.app/",
    githubLink: "https://github.com/canutoilberto/order-app",
  },
  {
    title: "Lojinha",
    description:
      "Um modelo de e-commerce que serve perfeitamente para o seu negócio dominar a internet.",
    image: "/loja.jpg",
    liveLink: "https://lojinha-blue.vercel.app/",
    githubLink: "https://github.com/canutoilberto/lojinha-app",
  },
  {
    title: "Estoque+",
    description:
      "Um aplicativo de gerenciamento de estoque para empresas de pequeno, médio e grande porte. Aplicação de exemplo.",
    image: "/estoque.png",
    liveLink: "https://controle-estoque-plum.vercel.app/",
    githubLink: "https://github.com/canutoilberto/controle_estoque",
  },
];

export default function MyProjects() {
  return (
    <section className="bg-background max-w-screen-xl mx-auto py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Meus Principais Projetos
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-[200px] md:h-[250px]">
                    <Image
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button asChild variant="outline">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Projeto
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código Fonte
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mt-8">
            <Button size="lg">
              <Link href="/">Voltar ao Início</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

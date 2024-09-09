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

export default function Projects() {
  return (
    <section
      id="projetos"
      className="bg-background max-w-screen-xl mx-auto py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Projetos em Destaque
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
              <Link href="/my-projects">Meus Projetos</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HeaderSection() {
  return (
    <section className="bg-background max-w-screen-xl mx-auto py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Desenvolvedor Web Full Stack
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Eu sou Ilberto Canuto e transformo ideias em experiências digitais
              incríveis. Especializado em criar aplicações web modernas e
              responsivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="#projetos">
                  Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contato">Entre em Contato</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/me.jpg"
                alt="Foto do Desenvolvedor"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

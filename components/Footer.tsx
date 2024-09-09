import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Coluna 1: Redes Sociais */}
          <div>
            <h2 className="text-lg font-semibold text-primary mb-4">
              Conecte-se
            </h2>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/canutoilberto"
                className="text-muted-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ilberto-canuto-469422212/"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/canutoilberto"
                className="text-muted-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h2 className="text-lg font-semibold text-primary mb-4">
              Links Rápidos
            </h2>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#sobre"
                className="text-muted-foreground hover:text-primary"
              >
                Sobre
              </Link>
              <Link
                href="#projetos"
                className="text-muted-foreground hover:text-primary"
              >
                Projetos
              </Link>
              <Link
                href="#habilidades"
                className="text-muted-foreground hover:text-primary"
              >
                Habilidades
              </Link>
              <Link
                href="#contato"
                className="text-muted-foreground hover:text-primary"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h2 className="text-lg font-semibold text-primary mb-4">Contato</h2>
            <address className="not-italic">
              <p className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:canutoilberto@gmail.com"
                  className="hover:text-primary"
                >
                  canutoilberto@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Canuto&apos;s. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

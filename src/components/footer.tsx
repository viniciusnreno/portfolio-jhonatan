import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:contato@jhonatan.dev",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre Mim", href: "/sobre" },
    { name: "Projetos", href: "/projetos" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Jhonatan</h3>
            <p className="text-muted-foreground">
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais incríveis.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>contato@jhonatan.dev</p>
              <p>São Paulo, Brasil</p>
              <p>+55 (11) 99999-9999</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Jhonatan. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-red-500" /> usando Next.js
            e Shadcn UI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

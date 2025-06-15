import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Palette,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Python",
    "Git",
    "MongoDB",
    "PostgreSQL",
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web modernas e responsivas",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Aplicações Mobile",
      description: "Desenvolvimento de apps mobile com React Native",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e experiências de usuário",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Olá, eu sou Jhonatan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais
            incríveis
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Especializado em React, Next.js e tecnologias modernas. Transformo
            ideias em soluções digitais funcionais e elegantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:contato@jhonatan.dev">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tecnologias</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principais tecnologias e ferramentas que utilizo no
              desenvolvimento
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm py-2 px-4"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Como posso ajudar você a transformar suas ideias em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-xl mb-8 opacity-90">
            Estou sempre aberto a novos desafios e oportunidades
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/sobre">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

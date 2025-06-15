import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Heart,
} from "lucide-react";

export default function Sobre() {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Tech Solutions",
      period: "2022 - Presente",
      description:
        "Desenvolvimento de aplicações web com React, Next.js e Node.js. Responsável por arquitetura de sistemas e mentoria de desenvolvedores júnior.",
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Criação de interfaces responsivas e interativas. Trabalho com equipes de design para implementar experiências de usuário excepcionais.",
    },
    {
      title: "Desenvolvedor Junior",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
        "Primeiro emprego como desenvolvedor. Foco em aprendizado e desenvolvimento de funcionalidades básicas em JavaScript e React.",
    },
  ];

  const education = [
    {
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal",
      period: "2016 - 2020",
      description:
        "Formação sólida em algoritmos, estruturas de dados e engenharia de software.",
    },
    {
      title: "Curso de Desenvolvimento Web",
      institution: "Rocketseat",
      period: "2019",
      description:
        "Bootcamp intensivo focado em tecnologias modernas como React, Node.js e React Native.",
    },
  ];

  const interests = [
    "Tecnologia",
    "Programação",
    "Design",
    "Música",
    "Fotografia",
    "Viagens",
    "Leitura",
    "Games",
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mim</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça um pouco mais sobre minha jornada, experiências e o que me
            motiva como desenvolvedor
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Informações Pessoais */}
          <div className="lg:col-span-1">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Informações Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>São Paulo, Brasil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>contato@jhonatan.dev</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>25 anos</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interesses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sobre */}
            <Card>
              <CardHeader>
                <CardTitle>Minha História</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Olá! Sou Jhonatan, um desenvolvedor full stack apaixonado por
                  tecnologia e inovação. Minha jornada na programação começou há
                  mais de 5 anos, quando descobri o poder de transformar ideias
                  em soluções digitais funcionais.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ao longo dos anos, desenvolvi expertise em tecnologias como
                  React, Next.js, Node.js e TypeScript. Tenho experiência tanto
                  no frontend quanto no backend, o que me permite criar
                  aplicações completas e robustas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Além da programação, sou apaixonado por design e experiência
                  do usuário. Acredito que a tecnologia deve ser não apenas
                  funcional, mas também intuitiva e agradável de usar. Estou
                  sempre em busca de novos desafios e oportunidades para crescer
                  profissionalmente.
                </p>
              </CardContent>
            </Card>

            {/* Experiência */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Experiência Profissional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <Badge variant="secondary">{exp.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground">{exp.description}</p>
                      {index < experiences.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Educação */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Formação Acadêmica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-semibold text-lg">{edu.title}</h3>
                        <Badge variant="secondary">{edu.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">{edu.description}</p>
                      {index < education.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Vamos conversar?</h3>
                <p className="mb-6 opacity-90">
                  Estou sempre aberto a novas oportunidades e projetos
                  interessantes
                </p>
                <Button variant="secondary" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Entre em Contato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

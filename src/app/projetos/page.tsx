import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import Link from "next/link";

export default function Projetos() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description:
        "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e painel administrativo. Interface moderna e responsiva.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      category: "Web App",
      status: "Concluído",
      date: "2024",
      team: "Solo",
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: [
        "Sistema de autenticação completo",
        "Integração com gateway de pagamento",
        "Painel administrativo",
        "Design responsivo",
      ],
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description:
        "Dashboard interativo para análise de dados com gráficos dinâmicos, filtros avançados e relatórios em tempo real.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      category: "Dashboard",
      status: "Concluído",
      date: "2023",
      team: "3 pessoas",
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: [
        "Visualizações interativas",
        "Dados em tempo real",
        "Filtros avançados",
        "Exportação de relatórios",
      ],
    },
    {
      id: 3,
      title: "App de Delivery",
      description:
        "Aplicativo mobile para delivery de comida com geolocalização, rastreamento de pedidos e sistema de avaliações.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Google Maps", "Stripe"],
      category: "Mobile App",
      status: "Em desenvolvimento",
      date: "2024",
      team: "2 pessoas",
      github: "https://github.com",
      demo: null,
      highlights: [
        "Geolocalização em tempo real",
        "Sistema de notificações",
        "Pagamento integrado",
        "Interface intuitiva",
      ],
    },
    {
      id: 4,
      title: "Sistema de Gestão",
      description:
        "Sistema completo para gestão de pequenas empresas com controle de estoque, vendas e relatórios financeiros.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
      category: "Sistema",
      status: "Concluído",
      date: "2023",
      team: "4 pessoas",
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: [
        "Controle de estoque",
        "Relatórios financeiros",
        "Multi-usuário",
        "Backup automático",
      ],
    },
    {
      id: 5,
      title: "Landing Page Corporativa",
      description:
        "Landing page moderna e otimizada para SEO de uma empresa de tecnologia, com animações suaves e design responsivo.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Website",
      status: "Concluído",
      date: "2024",
      team: "Solo",
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: [
        "Otimização SEO",
        "Animações fluidas",
        "Performance otimizada",
        "Design responsivo",
      ],
    },
    {
      id: 6,
      title: "API RESTful",
      description:
        "API robusta para gerenciamento de usuários e conteúdo com autenticação JWT, documentação completa e testes automatizados.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
      category: "Backend",
      status: "Concluído",
      date: "2023",
      team: "Solo",
      github: "https://github.com",
      demo: null,
      highlights: [
        "Autenticação JWT",
        "Documentação Swagger",
        "Testes automatizados",
        "Rate limiting",
      ],
    },
  ];

  const categories = [
    "Todos",
    "Web App",
    "Mobile App",
    "Dashboard",
    "Website",
    "Sistema",
    "Backend",
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meus Projetos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos projetos que desenvolvi, mostrando diferentes
            tecnologias e soluções criativas
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {project.title.charAt(0)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={
                      project.status === "Concluído" ? "default" : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {project.team}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1">
                  <p className="text-sm font-medium">Destaques:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Código
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild className="flex-1">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4">Gostou do que viu?</h2>
              <p className="mb-6 opacity-90">
                Estes são apenas alguns dos projetos que desenvolvi. Tenho muito
                mais para mostrar!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/sobre">Conheça mais sobre mim</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Ver todos no GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

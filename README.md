# 🚀 Portfólio Jhonatan

Um portfólio moderno e responsivo desenvolvido com Next.js, Shadcn UI e Tailwind CSS.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Performance Otimizada**: Construído com Next.js 15 para máxima velocidade
- **Componentes Reutilizáveis**: Usando Shadcn UI para consistência
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade
- **SEO Otimizado**: Meta tags e estrutura otimizada para motores de busca

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: Shadcn UI
- **Ícones**: Lucide React
- **Fontes**: Geist Sans & Geist Mono

## 📱 Páginas

### 🏠 Home

- Seção hero com apresentação
- Showcase de tecnologias
- Serviços oferecidos
- Call-to-action

### 👨‍💻 Sobre Mim

- Informações pessoais
- História profissional
- Experiências de trabalho
- Formação acadêmica
- Interesses pessoais

### 💼 Projetos

- Grid de projetos
- Filtros por categoria
- Detalhes técnicos
- Links para código e demo
- Status dos projetos

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/portfolio-jhonatan.git
cd portfolio-jhonatan
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

```bash
npm run dev          # Executa em modo de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Executa build de produção
npm run lint         # Executa o linter
```

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `src/app/globals.css` através das variáveis CSS:

```css
:root {
  --primary: 222.2 84% 4.9%;
  --primary-foreground: 210 40% 98%;
  /* ... outras variáveis */
}
```

### Conteúdo

Para personalizar o conteúdo:

1. **Informações pessoais**: Edite os dados nas páginas `src/app/page.tsx`, `src/app/sobre/page.tsx`
2. **Projetos**: Modifique o array `projects` em `src/app/projetos/page.tsx`
3. **Links sociais**: Atualize os links nos componentes `Navigation` e `Footer`

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── sobre/             # Página Sobre Mim
│   ├── projetos/          # Página Projetos
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes Shadcn UI
│   ├── navigation.tsx    # Componente de navegação
│   └── footer.tsx        # Componente de rodapé
└── lib/                  # Utilitários
    └── utils.ts          # Funções auxiliares
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Netlify

1. Conecte seu repositório
2. Configure o comando de build: `npm run build`
3. Configure o diretório de publicação: `out`

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

- **Email**: contato@jhonatan.dev
- **LinkedIn**: [linkedin.com/in/jhonatan](https://linkedin.com/in/jhonatan)
- **GitHub**: [github.com/jhonatan](https://github.com/jhonatan)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
# portfolio-jhonatan

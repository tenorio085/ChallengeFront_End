# TreenUp
## Descrição do Projeto

O **TreenUp** é uma plataforma digital corporativa que conecta ações ecológicas reais a recompensas tangíveis através de gamificação. Resolvemos o problema da falta de engajamento contínuo de colaboradores em hábitos sustentáveis, transformando metas ESG em uma jornada interativa via Eco-World, Eco-Quest RPG e Treen-Stops de Realidade Aumentada.

O mercado corporativo enfrenta uma cobrança severa pela implementação de métricas ESG reais e auditáveis. A TreenUp atua como uma ponte que transforma o esforço individual de economia e preservação em uma jornada visualmente recompensadora, gerando dados de impacto socioambiental precisos para as empresas e benefícios financeiros tangíveis (abatimento na conta de luz, vouchers) para os usuários.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | ^18.3.1 | Interface e Componentização |
| **Vite** | ^5.4.1 | Build e Performance (HMR rápido) |
| **TypeScript** | ^5.5.3 | Tipagem estática e segurança no código |
| **Tailwind CSS** | ^3.4.10 | Estilização e Responsividade (utility-first) |
| **React Router DOM** | ^6.26.0 | Navegação SPA (Single Page Application) |
| **React Hook Form** | ^7.53.0 | Gerenciamento de formulários |
| **Zod** | ^3.23.8 | Validação de schemas (formulários) |
| **@hookform/resolvers** | ^3.9.0 | Integração do Zod com o React Hook Form |

---

## Estrutura de Pastas do Projeto

```
challenge_front/
├── public/                      # Arquivos públicos estáticos
│   └── favicon.svg              # Ícone do site
├── src/                         # Código-fonte da aplicação
│   ├── assets/                  # Arquivos de mídia (imagens, ícones)
│   │   ├── imagem1.jpg
│   │   ├── imagem2.jpg
│   │   └── imagem3.jpg
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Botao.tsx            # Botão padrão
│   │   ├── Cabecalho.tsx        # Header com navegação
│   │   ├── Rodape.tsx           # Footer do site
│   │   ├── Layout.tsx           # Layout base (Header + Page + Footer)
│   │   └── SecaoCabecalho.tsx   # Cabeçalho das páginas internas
│   ├── data/                    # Dados estáticos da aplicação
│   │   └── index.ts             # Integrantes, funcionalidades, FAQ, etc.
│   ├── pages/                   # Páginas da aplicação (rotas)
│   │   ├── Home.tsx             # Início
│   │   ├── Sobre.tsx            # Sobre o projeto
│   │   ├── Equipe.tsx           # Integrantes do grupo
│   │   ├── SolucaoProjeto.tsx   # Business Model Canvas + Solução
│   │   ├── FAQ.tsx              # Perguntas frequentes
│   │   └── Contato.tsx          # Formulário de contato
│   ├── types/                   # Tipos TypeScript globais
│   │   └── index.ts             # Interfaces: Integrante, FAQItem, etc.
│   ├── App.tsx                  # Configuração de rotas e página 404
│   ├── main.tsx                 # Ponto de entrada da aplicação
│   ├── index.css                # Estilos globais + diretivas Tailwind
│   └── vite-env.d.ts            # Tipos do Vite e imports de imagem
├── legacy/                      # Código legado da Sprint 02 (backup)
│   ├── css/
│   ├── js/
│   └── *.html
├── index.html                   # HTML principal
├── vite.config.ts               # Configurações do Vite
├── tsconfig.json                # Configurações do TypeScript
├── tsconfig.node.json           # TS para arquivos de configuração Node
├── tailwind.config.js           # Tema e conteúdo do Tailwind
├── postcss.config.js            # Plugins do PostCSS (Tailwind + Autoprefixer)
├── package.json                 # Dependências e scripts
├── package-lock.json            # Lock das dependências
└── README.md                    # Este arquivo
```

---

## Como Executar Localmente

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- **Node.js** (versão 18 ou superior)
- **Git** (para versionamento)

### Passo a passo

1. **Clone o repositório** (ou acesse a pasta do projeto)
```bash
git clone <link-do-repositorio-github>
cd challenge_front
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento** (modo dev com HMR)
```bash
npm run dev
```
> A aplicação estará disponível em: `http://localhost:5173`

4. **Build de produção** (gerar pasta `dist/`)
```bash
npm run build
```

5. **Pré-visualizar build de produção**
```bash
npm run preview
```

---

## 🌐 Link do GitHub

> **Repositório Oficial**: https://github.com/tenorio085/ChallengeFront_End.git

---

## Integrantes do Grupo

|Nome Completo | RM | GitHub | LinkedIn |
| **Thiago Motitsuki Tan** | 570760 | [ThiagoTan](https://github.com/ThiagoTan) | [LinkedIn](https://www.linkedin.com/in/thiago-tan) |
| **Arthur Netto Barbosa** | 569982 | [arthurnetto08](https://github.com/arthurnetto08) | [LinkedIn](https://www.linkedin.com/in/arthur-barbosa-8654353bb) |
| **Joao Pedro Rodrigues Siqueira** | 571316 | [JoaoSiqueira12](https://github.com/JoaoSiqueira12) | [LinkedIn](https://www.linkedin.com/in/joão-siqueira-25a055410) 
| **Felipe Tenorio Diniz** | 568828 | [tenorio085](https://github.com/tenorio085) 

---

## Contato

Tem dúvidas ou quer saber mais sobre o TreenUp?
- E-mail: `contato@treenup.com.br`
- Ou use o [Formulário de Contato](http://localhost:5173/contato) da aplicação.

---

## Imagens e Ícones do Projeto

O projeto utiliza as seguintes mídias:
- **Fotos do projeto** (pasta `src/assets/`): 3 imagens reais sobre sustentabilidade e ações ecológicas
- **Favicon SVG**: Árvore estilizada representando a marca TreenUp

---

## Páginas da Aplicação

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | **Início (Home)** | Hero, funcionalidades, galeria de imagens, "como funciona" e CTA |
| `/sobre` | **Sobre** | Problema, solução, 4 pilares da TreenUp e tipo de inovação |
| `/equipe` | **Equipe / Integrantes** | Cards com nome, RM, GitHub e LinkedIn dos membros |
| `/solucao` | **Solução do Projeto** | Business Model Canvas completo e detalhes da inovação |
| `/faq` | **FAQ** | Accordion com perguntas e respostas frequentes |
| `/contato` | **Contato** | Formulário com React Hook Form + Zod validation |
| `/funcionalidade/:id` | **Detalhe Funcionalidade** | Página dinâmica (useParams) com detalhe de cada feature |
| `*` | **404** | Página não encontrada com navegação de volta |

---

### FIAP - Front-End Design Engineering
**Turma**: 2026 | **Sprint 03**: React + Vite + TypeScript + Tailwind CSS

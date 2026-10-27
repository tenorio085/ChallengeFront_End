# TreenUp — Front-End Design Engineering (Sprint 04)

O **TreenUp** é uma plataforma digital corporativa de gamificação sustentável (ESG) que conecta ações ecológicas reais a recompensas tangíveis. Este projeto faz parte da entrega da **Sprint 04** da FIAP.

##  Links do Projeto
- **Repositório GitHub**: [https://github.com/tenorio085/ChallengeFront_End](https://github.com/tenorio085/ChallengeFront_End)
- **Deploy Vercel**: [https://challenge-front-treenup.vercel.app](https://challenge-front-treenup.vercel.app)
- **Render**: [https://sprint4-java-e7d9.onrender.com](https://sprint4-java-e7d9.onrender.com)


##  Tecnologias Utilizadas
- **React + Vite + TypeScript**: Base da aplicação para alta performance e segurança de tipos.
- **Tailwind CSS**: Estilização utility-first e responsividade completa.
- **React Router DOM**: Navegação SPA com suporte a rotas estáticas e dinâmicas.
- **React Hook Form + Zod**: Gerenciamento e validação rigorosa de formulários.
- **Fetch API**: Integração nativa com o backend Java (sem bibliotecas externas).
- **Context API**: Gerenciamento de estado global (Modo Escuro).

##  Estrutura de Pastas
```text
src/
├── assets/         # Imagens e recursos estáticos
├── components/     # Componentes reutilizáveis (Badge, Botao, Cartao, etc.)
├── contexts/       # Gerenciamento de estado global (TemaContext)
├── data/           # Dados estáticos e mockados
├── hooks/          # Hooks customizados (useTema, useRevelarScroll)
├── pages/          # Páginas da aplicação (Home, Solucao, Contato, etc.)
├── services/       # Camada de integração com API REST
├── types/          # Definições de interfaces TypeScript
└── App.tsx         # Configuração de rotas e layout
```

##  Autores e Créditos (Equipe 1TDSPI)
- Thiago Motitsuki Tan** (RM 570760)
- Arthur Netto Barbosa** (RM 569982)
- Joao Pedro Rodrigues Siqueira** (RM 571316)
- Felipe Tenorio Diniz** (RM 568828)

##  Como Usar

### Pré-requisitos
- Node.js instalado (v18 ou superior).

### Instalação
1. Clone o repositório.
2. Execute `npm install` para instalar as dependências.

### Execução
1. Execute `npm run dev` para iniciar o servidor local.
2. Acesse `http://localhost:5173`.

### Integração com API
O projeto está configurado para consumir a API Java publicada em:
`https://sprint4-java-e7d9.onrender.com`

## 📧 Contato
Para mais informações, entre em contato através do formulário na página de **Contato** da aplicação ou pelo e-mail `contato@treenup.com.br`.

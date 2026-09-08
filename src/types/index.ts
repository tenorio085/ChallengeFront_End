export interface Integrante {
  id: number;
  nome: string;
  rm: string;
  github: string;
  linkedin: string;
}

export interface Funcionalidade {
  id: number;
  icone: string;
  titulo: string;
  descricao: string;
}

export interface Passo {
  numero: number;
  titulo: string;
  descricao: string;
}

export interface Pilar {
  numero: number;
  titulo: string;
  descricao: string;
}

export interface FAQItem {
  id: number;
  pergunta: string;
  resposta: string;
}

export interface FormularioContato {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

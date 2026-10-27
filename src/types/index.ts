export interface Integrante {
  id: number;
  nome: string;
  rm: string;
  github: string;
  linkedin: string;
  foto: string;
  turma: string;
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

export interface ItemFAQ {
  id: number;
  pergunta: string;
  resposta: string;
}

export interface DadosFormularioContato {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface DadoEstatistica {
  id: number;
  valor: number;
  sufixo?: string;
  rotulo: string;
  icone: string;
  cor: string;
}

export interface Depoimento {
  id: number;
  nome: string;
  cargo: string;
  texto: string;
  avatar: string;
  nota: number;
}

export interface OpcaoAssunto {
  value: string;
  label: string;
}

export type Tema = 'claro' | 'escuro';

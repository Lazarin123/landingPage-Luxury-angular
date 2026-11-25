export type Categoria = 'Relógios' | 'Pulseiras' | 'Roupas';

export interface Produto {
  id: number;
  nome: string;
  categoria: Categoria;
  preco: number;
  descricao: string;
}

export const CATEGORIAS: ('Todos' | Categoria)[] = ['Todos', 'Relógios', 'Pulseiras', 'Roupas'];

export const PRODUTOS: Produto[] = [
  { id: 1, nome: 'Calibre 01', categoria: 'Relógios', preco: 18900, descricao: 'Automático, caixa de aço 40 mm, vidro de safira e reserva de 70 horas.' },
  { id: 2, nome: 'Cronógrafo Meridiano', categoria: 'Relógios', preco: 24500, descricao: 'Cronógrafo com mostrador verde-garrafa e pulseira de couro de crocodilo.' },
  { id: 3, nome: 'Dress Lunar', categoria: 'Relógios', preco: 15200, descricao: 'Fino, com fase da lua e caixa em ouro rosé 18k.' },
  { id: 4, nome: 'Corrente Cubana 18k', categoria: 'Pulseiras', preco: 6800, descricao: 'Elos maciços em ouro amarelo 18k, fecho de segurança embutido.' },
  { id: 5, nome: 'Bracelete Trama', categoria: 'Pulseiras', preco: 4200, descricao: 'Fios de ouro trançados à mão, ajustável para qualquer pulso.' },
  { id: 6, nome: 'Pulseira Aurora', categoria: 'Pulseiras', preco: 1900, descricao: 'Couro italiano curtido ao vegetal com fecho em latão envelhecido.' },
  { id: 7, nome: 'Blazer Lã Fria', categoria: 'Roupas', preco: 5400, descricao: 'Alfaiataria italiana em lã fria, forro de seda e botões de madrepérola.' },
  { id: 8, nome: 'Camisa Seda Pura', categoria: 'Roupas', preco: 2300, descricao: 'Seda de amoreira com caimento fluido e punhos duplos.' },
  { id: 9, nome: 'Sobretudo Cashmere', categoria: 'Roupas', preco: 9800, descricao: 'Cashmere mongol em corte longo, costuras feitas à mão.' },
];

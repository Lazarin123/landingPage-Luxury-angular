import { Injectable, computed, signal } from '@angular/core';
import { Produto } from './products';

export interface Item { p: Produto; q: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  itens = signal<Item[]>([]);
  aberto = signal(false);
  feito = signal(false);
  qtd = computed(() => this.itens().reduce((n, i) => n + i.q, 0));
  total = computed(() => this.itens().reduce((n, i) => n + i.q * i.p.preco, 0));

  add(p: Produto) {
    this.feito.set(false);
    const existe = this.itens().some(i => i.p.id === p.id);
    this.itens.update(l => existe ? l.map(i => i.p.id === p.id ? { ...i, q: i.q + 1 } : i) : [...l, { p, q: 1 }]);
    this.aberto.set(true);
  }

  mudar(id: number, delta: number) {
    this.itens.update(l => l.map(i => i.p.id === id ? { ...i, q: i.q + delta } : i).filter(i => i.q > 0));
  }

  finalizar() {
    this.itens.set([]);
    this.feito.set(true);
  }
}

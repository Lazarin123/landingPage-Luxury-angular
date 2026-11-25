import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from './cart.service';
import { CATEGORIAS, PRODUTOS } from './products';

@Component({
  selector: 'app-catalog',
  imports: [CurrencyPipe],
  template: `
    <section id="colecao" class="sec wrap">
      <h2>A coleção</h2>
      <div class="tabs" role="group" aria-label="Filtrar por categoria">
        @for (c of categorias; track c) {
          <button [class.on]="filtro() === c" [attr.aria-pressed]="filtro() === c" (click)="filtro.set(c)">{{ c }}</button>
        }
      </div>
      <div class="grid">
        @for (p of lista(); track p.id) {
          <article class="card">
            <div class="art" aria-hidden="true">
              @switch (p.categoria) {
                @case ('Relógios') {
                  <svg viewBox="0 0 120 120"><rect x="44" y="4" width="32" height="112" rx="10"/><circle cx="60" cy="60" r="30"/><path d="M60 60V42M60 60l12 6"/></svg>
                }
                @case ('Pulseiras') {
                  <svg viewBox="0 0 120 120"><ellipse cx="60" cy="60" rx="40" ry="32"/><ellipse cx="60" cy="60" rx="30" ry="22"/></svg>
                }
                @default {
                  <svg viewBox="0 0 120 120"><path d="M40 16 14 32l10 18 12-6v60h48V44l12 6 10-18-26-16c-4 8-12 12-20 12s-16-4-20-12z"/></svg>
                }
              }
            </div>
            <h3>{{ p.nome }}</h3>
            <p>{{ p.descricao }}</p>
            <div class="row">
              <strong>{{ p.preco | currency: 'BRL' : 'symbol' : '1.0-0' }}</strong>
              <button class="btn" (click)="cart.add(p)">Adicionar à sacola</button>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class CatalogComponent {
  cart = inject(CartService);
  categorias = CATEGORIAS;
  filtro = signal<(typeof CATEGORIAS)[number]>('Todos');
  lista = computed(() => PRODUTOS.filter(p => this.filtro() === 'Todos' || p.categoria === this.filtro()));
}

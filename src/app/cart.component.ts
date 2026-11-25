import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  template: `
    @if (cart.aberto()) { <div class="veu" (click)="cart.aberto.set(false)"></div> }
    <aside class="gaveta" [class.on]="cart.aberto()" aria-label="Sacola de compras" [attr.aria-hidden]="!cart.aberto()">
      <div class="gaveta-topo">
        <h2>Sua sacola</h2>
        <button class="fechar" (click)="cart.aberto.set(false)" aria-label="Fechar sacola">✕</button>
      </div>
      @if (cart.feito()) {
        <p class="aviso">Pedido simulado com sucesso. Este é um projeto de portfólio: nenhuma cobrança foi feita.</p>
      } @else if (!cart.itens().length) {
        <p class="aviso">Sua sacola está vazia. Escolha uma peça na coleção.</p>
      } @else {
        @for (i of cart.itens(); track i.p.id) {
          <div class="it">
            <div><b>{{ i.p.nome }}</b><small>{{ i.p.preco | currency: 'BRL' : 'symbol' : '1.0-0' }}</small></div>
            <div class="qt">
              <button (click)="cart.mudar(i.p.id, -1)" aria-label="Diminuir quantidade">−</button>
              <span>{{ i.q }}</span>
              <button (click)="cart.mudar(i.p.id, 1)" aria-label="Aumentar quantidade">+</button>
            </div>
          </div>
        }
        <div class="tot"><span>Total</span><strong>{{ cart.total() | currency: 'BRL' : 'symbol' : '1.0-0' }}</strong></div>
        <button class="btn full" (click)="cart.finalizar()">Finalizar compra</button>
      }
    </aside>
  `,
})
export class CartComponent {
  cart = inject(CartService);
}

import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { CartService } from './cart.service';
import { CatalogComponent } from './catalog.component';
import { CartComponent } from './cart.component';

@Component({
  selector: 'app-root',
  imports: [CatalogComponent, CartComponent],
  template: `
    <header class="topo">
      <div class="wrap nav">
        <a class="logo" href="#inicio">Maison Aurum</a>
        <nav class="links" aria-label="Principal">
          <a href="#colecao">Coleção</a>
          <a href="#atelier">Atelier</a>
          <a href="#novidades">Novidades</a>
        </nav>
        <button class="sacola" (click)="cart.aberto.set(true)">Sacola ({{ cart.qtd() }})</button>
      </div>
    </header>

    <main id="inicio">
      <section class="wrap hero">
        <div>
          <h1>O tempo, bem vestido.</h1>
          <p>Relógios automáticos, pulseiras em ouro e alfaiataria italiana, escolhidos peça por peça para durar uma vida.</p>
          <div class="acoes">
            <a class="btn" href="#colecao">Ver coleção</a>
            <a class="btn ghost" href="#atelier">Conhecer o atelier</a>
          </div>
        </div>
        <svg class="relogio" viewBox="0 0 400 400" role="img" aria-label="Relógio mostrando a hora atual">
          <rect x="165" y="0" width="70" height="400" rx="22" class="tira"/>
          <circle cx="200" cy="200" r="158" class="caixa"/>
          <circle cx="200" cy="200" r="138" class="mostrador"/>
          @for (t of ticks; track t) {
            <line x1="200" y1="72" x2="200" [attr.y2]="t % 90 === 0 ? 96 : 86" class="marca" [attr.transform]="'rotate(' + t + ' 200 200)'"/>
          }
          <text x="200" y="150" text-anchor="middle" class="marca-nome">Maison Aurum</text>
          <text x="200" y="268" text-anchor="middle" class="marca-sub">Automático</text>
          <line x1="200" y1="200" x2="200" y2="128" class="h-hora" [attr.transform]="'rotate(' + h() + ' 200 200)'"/>
          <line x1="200" y1="200" x2="200" y2="92" class="h-min" [attr.transform]="'rotate(' + m() + ' 200 200)'"/>
          <line x1="200" y1="218" x2="200" y2="88" class="h-seg" [attr.transform]="'rotate(' + s() + ' 200 200)'"/>
          <circle cx="200" cy="200" r="7" class="pino"/>
        </svg>
      </section>

      <app-catalog />

      <section id="atelier" class="sec wrap">
        <h2>Feito para durar</h2>
        <div class="tres">
          <div><h3>Feito à mão</h3><p>Cada relógio é montado e regulado por um único relojoeiro, que assina a peça.</p></div>
          <div><h3>Materiais raros</h3><p>Ouro 18k, safira, seda de amoreira e cashmere mongol, com origem rastreada.</p></div>
          <div><h3>Garantia de cinco anos</h3><p>Revisão gratuita e manutenção vitalícia para tudo o que sai do nosso atelier.</p></div>
        </div>
      </section>

      <section id="novidades" class="sec wrap news">
        <h2>Receba os lançamentos primeiro</h2>
        @if (enviado()) {
          <p class="aviso">Pronto! Os lançamentos chegarão em {{ email() }}.</p>
        } @else {
          <form (submit)="assinar($event)">
            <input type="email" placeholder="seu@email.com" aria-label="Seu e-mail" [value]="email()" (input)="email.set($any($event.target).value)" required>
            <button class="btn" type="submit">Quero receber</button>
          </form>
          @if (erro()) { <p class="erro" role="alert">Digite um e-mail válido, como nome&#64;dominio.com.</p> }
        }
      </section>
    </main>

    <footer class="wrap rodape">© 2026 Maison Aurum. Projeto fictício criado para portfólio.</footer>
    <app-cart />
  `,
})
export class AppComponent implements OnDestroy {
  cart = inject(CartService);
  agora = signal(new Date());
  private timer = setInterval(() => this.agora.set(new Date()), 1000);
  ticks = Array.from({ length: 12 }, (_, i) => i * 30);
  s = computed(() => this.agora().getSeconds() * 6);
  m = computed(() => this.agora().getMinutes() * 6 + this.agora().getSeconds() / 10);
  h = computed(() => (this.agora().getHours() % 12) * 30 + this.agora().getMinutes() / 2);

  email = signal('');
  enviado = signal(false);
  erro = signal(false);

  assinar(e: Event) {
    e.preventDefault();
    const ok = /^\S+@\S+\.\S+$/.test(this.email());
    this.erro.set(!ok);
    this.enviado.set(ok);
  }

  ngOnDestroy() { clearInterval(this.timer); }
}

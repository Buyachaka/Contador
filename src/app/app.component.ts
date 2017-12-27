import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="header-class">Contador de palavras e letras</h1>
  <div class= "top-menu-container">
  <a class="menu-text-class" routerLink="/">Contar</a>
  <a class="menu-text-class" routerLink="/lazy/nested">FAQ</a>
  </div>
  <router-outlet></router-outlet>
  <ng-adsense class="adsense-container"></ng-adsense>
  `,
  styles: []
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
  }

}

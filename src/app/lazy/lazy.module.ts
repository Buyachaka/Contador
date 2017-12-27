import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'

@Component({
  selector: 'lazy-view',
  template: `
  <h3>Este é um aplicativo criado para contar o numero de palavras e letras dentro de um texto.</h3>
  <div>
  Se você gostou do applicativo ou tem alguma suggestão pode enviar para meu email lucas.janequine.lopes@gmail.com
  </div>

  `
})
export class LazyComponent {}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}
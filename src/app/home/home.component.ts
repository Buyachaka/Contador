import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'home',
  template: `
  <textarea #textbox class="inputarea" (keyup)="CountWords(textbox.value)" placeholder="Escreva seu texto aqui:"></textarea>
  <div class="bottom-menu-container">
  <div class="wordclass">N° Palavras: {{ numOfWords }}</div>
   <div class="letterclass">N° Letras: {{ numOfLetters }}</div>
   </div>
  `
})
export class HomeComponent implements OnInit {
  public message: string;
  public numOfWords: number;
  public numOfLetters: number;

  constructor() {}

  ngOnInit() {
    this.numOfWords = 0;
    this.numOfLetters = 0;
  }

  CountWords (words) {
  	this.numOfWords = words.match(/\S+/g).length;
  	this.numOfLetters = words.length;
  }
}
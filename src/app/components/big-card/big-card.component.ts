import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover: string ="";
  @Input()
  cardTitle: string ='';
  @Input()
  cardSubtitle: string = '';
  @Input()
  id: string = '';
    constructor(){

  }
}

import { Component, Input } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  getId: number | null = 1;



   
 


}

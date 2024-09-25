import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent   
 {
  /*URL de la imagen del icono de la tarjeta.*/
  @Input() icon: string = '';

  /*Título de la tarjeta.*/
  @Input() title: string = '';

  /*Descripción de la tarjeta.*/
  @Input() description: string = '';
}

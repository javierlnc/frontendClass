import { Component } from '@angular/core';
import { NavbarComponent } from '../../Layout/navbar/navbar.component';
import { FooterComponent } from '../../Layout/footer/footer.component';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}

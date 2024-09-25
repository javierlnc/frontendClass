import { Component } from '@angular/core';
import { NavbarComponent } from '../../Layout/navbar/navbar.component';
import { FooterComponent } from "../../Layout/footer/footer.component";
import { CardComponent } from "../../Layout/card/card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

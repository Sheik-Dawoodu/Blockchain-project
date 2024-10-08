import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { SubscriptionComponent } from "../subscription/subscription.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SubscriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

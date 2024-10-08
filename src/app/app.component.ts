import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from "./components/shared/header/header.component";
import { ModalComponent } from './components/shared/modal/modal.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ModalComponent, NavbarComponent, HeaderComponent,HomeComponent,SubscriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'flowbite-template';

  ngOnInit(): void {
    initFlowbite();
  }
}

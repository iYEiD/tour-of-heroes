import { Component } from '@angular/core';
import { MessagesComponent } from './features/components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, MessagesComponent, NavbarComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'Tour of Heroes';
}

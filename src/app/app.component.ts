import { Component } from '@angular/core';
import { HeroesComponent } from './features/components/heroes/heroes.component';
import { MessagesComponent } from './features/components/messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
}

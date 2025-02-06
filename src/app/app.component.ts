import { Component } from '@angular/core';
import { HeroesComponent } from './features/components/heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
}

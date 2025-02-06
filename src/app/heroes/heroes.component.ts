import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
heroes = HEROES;

selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
} 
}

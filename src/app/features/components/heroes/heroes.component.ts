import { Component } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../../services/hero.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService, private messageService: MessageService) { 
  }
heroes: Hero[] = [];

selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
}

getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
}
}

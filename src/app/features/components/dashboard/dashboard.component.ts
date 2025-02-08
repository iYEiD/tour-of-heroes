import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../../services/hero.service';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private heroService: HeroService) { }
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5)); //returns from pos 1 to 5 (4 heroes)
  }


}

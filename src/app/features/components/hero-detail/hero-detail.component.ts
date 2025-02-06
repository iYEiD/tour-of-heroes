import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero } from '../../../interfaces/hero';
import { Input } from '@angular/core';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
@Input() hero?: Hero;
}

import { Component, Type } from '@angular/core';
import { MessagesComponent } from './features/components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, MessagesComponent, NavbarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'Tour of Heroes';
}

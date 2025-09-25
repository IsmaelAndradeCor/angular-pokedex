import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokedexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `<app-pokedex></app-pokedex>`,
})
export class AppComponent {
  title = 'angular-pokedex';
}

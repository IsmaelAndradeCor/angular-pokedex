import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'pokedex',
    loadComponent: () =>
      import('./components/pokedex/pokedex.component').then(m => m.PokedexComponent),
    title: 'Pokedex'
  },
  {
    path: 'pokemon/:name',
    loadComponent: () =>
      import('./components/pokemon-detail/pokemon-detail.component').then(m => m.PokemonDetailComponent),
    title: 'Detalle Pokémon'
  },
  { 
    path: '**', 
    redirectTo: 'home' 
}
];

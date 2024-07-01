import { Routes } from '@angular/router';
import { ListCardComponent } from './shared/components/list-card/list-card.component';
import { CocktailDetailComponent } from './feature/cocktail-detail/cocktail-detail.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { CocktailListComponent } from './feature/cocktail-list/cocktail-list.component';

export const routes: Routes = [
  {path: '', component: CocktailListComponent},
  {path: 'detail/:id', component: CocktailDetailComponent},
  {path: '**', component: NotFoundComponent}
];

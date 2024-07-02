import { Component, EventEmitter, Output, input } from '@angular/core';
import { Cocktail } from '../../../core/models/coktail.interface';
import { RouterLink } from '@angular/router';
import { CocktailDetails } from '../../../core/models/cocktail-details.interface';
import { IsAlcoholicDirective } from '../../directives/is-alcoholic.directive';
import { JoinStringPipe } from '../../pipes/join-string.pipe';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [RouterLink, IsAlcoholicDirective, JoinStringPipe],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent {
  public cocktail = input.required<CocktailDetails>();
  @Output() favoritesClick = new EventEmitter<number>();

  public onFavoritesClick(cocktailId: number) {
    this.favoritesClick.emit(cocktailId);
  }
}

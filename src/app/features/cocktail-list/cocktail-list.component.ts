import { Component } from '@angular/core';
import { ListCardComponent } from '../../shared/components/list-card/list-card.component';


@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [ListCardComponent],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

}

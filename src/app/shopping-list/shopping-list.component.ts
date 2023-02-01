import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igsubscription: Subscription;

  constructor(
    private listService: ShoppingListService,
    private logginService: LoggingService
  ) {}

  ngOnInit() {
    this.ingredients = this.listService.getIngredients();
    this.igsubscription = this.listService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.logginService.printLog('Hello from ShoppingListComponent');
  }

  onEditItem(index: number) {
    this.listService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igsubscription.unsubscribe();
  }
}

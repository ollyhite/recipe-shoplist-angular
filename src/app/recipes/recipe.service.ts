import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Super Tasty Schnitzel',
      'https://foodhub.scene7.com/is/image/woolworthsltdprod/birds-eye-chips-and-tasty-chicken-schnitzel:Mobile-1300x1150',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Burger',
      'Cheese Burgerrrrr!',
      'https://www.shutterstock.com/image-photo/tasty-pork-buger-on-wooden-600nw-734784787.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Mushroom', 5),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

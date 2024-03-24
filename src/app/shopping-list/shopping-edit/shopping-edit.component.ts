import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingMount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingMount);

    this.shoppingListService.addIngredient(newIngredient);
  }
}

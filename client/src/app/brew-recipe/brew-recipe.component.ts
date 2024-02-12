import { Component, Input, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, Brew, Ingredient } from "../store/model";
import { selectUserLoggedIn } from "../store/selectors";

@Component({
	selector: "app-brew-recipe",
	templateUrl: "./brew-recipe.component.html",
	styleUrls: ["./brew-recipe.component.css"],
})
export class BrewRecipeComponent {
	@Input() ingredient: Ingredient;
	@Input() brew: Brew;

	private store: Store<AppState> = inject(Store);
	loggedIn$ = this.store.select(selectUserLoggedIn);

	onSelect(ingredient: Ingredient): void {
		this.ingredient = ingredient;
		//console.log('ingredient = '+this.ingredient);
	}

	add(name: string, quantity: number, unit: string, brew_id: number): void {
		// this.brewService.addIngredient(
		// 	{ name, quantity, unit } as Ingredient,
		// 	brew_id,
		// );
	}

	delete(ingredient: Ingredient): void {
		// this.ingredients = this.ingredients.filter((h) => h !== ingredient);
		// this.brewService.deleteIngredient(ingredient).subscribe();
	}

	update(ingredient: Ingredient) {
		// this.brewService.updateIngredient(this.ingredient).subscribe();
	}

	save() {
		//this.ingredients.forEach(this.update(this.ingredients['1']))
	}
}

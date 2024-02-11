import { Component, Input, OnInit } from "@angular/core";
import { BrewService } from "../brew.service";
import { Brew, Ingredient } from "../store/model";

@Component({
	selector: "app-brew-recipe",
	templateUrl: "./brew-recipe.component.html",
	styleUrls: ["./brew-recipe.component.css"],
})
export class BrewRecipeComponent implements OnInit {
	@Input() ingredient: Ingredient;
	@Input() brew: Brew;

	loggedIn = false;

	//@Input() newIngredient: Ingredient;

	//this.ingredient.brew_id=this.brew.id;

	constructor(private brewService: BrewService) {}

	ngOnInit() {
		//console.log('var brew = '+this.brew.id);
		if (this.brew) {
			this.loggedIn = localStorage.getItem("loggedIn") === "true";
		}
	}

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

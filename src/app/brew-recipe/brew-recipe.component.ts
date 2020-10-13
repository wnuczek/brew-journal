import { Component, OnInit, Input } from '@angular/core';

import { Brew } from '../brew';
import { Ingredient } from '../ingredient';

import { BrewService } from '../brew.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brew-recipe',
  templateUrl: './brew-recipe.component.html',
  styleUrls: ['./brew-recipe.component.css']
})
export class BrewRecipeComponent implements OnInit {

  ingredients: Ingredient[]

  @Input() ingredient: Ingredient;
  @Input() brew: Brew;

  loggedIn: string = 'false';



  //@Input() newIngredient: Ingredient;

  //this.ingredient.brew_id=this.brew.id;

  constructor(private brewService: BrewService) { }

  ngOnInit() {
    //console.log('var brew = '+this.brew.id);
    if(this.brew) {
      this.getIngredients(this.brew.id);
      this.loggedIn=localStorage.getItem('loggedIn');
    }
  }

  ngOnChanges() {
    //console.log('var brew = '+this.brew.id);
    //console.log('ingredient = '+this.ingredient);
    this.getIngredients(this.brew.id);    
  }

  onSelect(ingredient: Ingredient): void {
    this.ingredient = ingredient;
    //console.log('ingredient = '+this.ingredient);
  }



  getIngredients(brewid: number): void {
  	//console.log('brewid = '+brewid);
  	this.brewService.getIngredients(brewid).subscribe(ingredients => {this.ingredients=ingredients;});
  }

  add(name: string, quantity: number, unit: string, brew_id: number): void {
    var ingredient;
    //console.log('ingredient = '+name);
    //ingredient['name']=name;
    //ingredient['quantity']=quantity;
    //ingredient['unit']=unit;
    this.brewService.addIngredient({name, quantity, unit} as Ingredient, brew_id)
      .subscribe(
        ingredient => {this.getIngredients(brew_id);}
      );
  }
 
  delete(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter(h => h !== ingredient);
    this.brewService.deleteIngredient(ingredient).subscribe();
  }

  update(ingredient: Ingredient) {
     this.brewService.updateIngredient(this.ingredient).subscribe();
  }
 
  save() {
    //this.ingredients.forEach(this.update(this.ingredients['1']))
  }


}

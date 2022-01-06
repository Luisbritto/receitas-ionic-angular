import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnetzel',
      imageUrl: '',
      ingredients: ['French Fries','Bacon','Cheddar']
    },
    {
      id: 'r2',
      title: 'Hamburguer',
      imageUrl: '',
      ingredients: ['Bread','Bacon','Cheddar','Hamburguer Meat']
    }
  ];

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    // eslint-disable-next-line arrow-body-style
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}

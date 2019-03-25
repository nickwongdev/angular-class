import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [];

  constructor() {
    this.recipies.push(new Recipe('Lasagna', 'Good lasagna', 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-3.jpg'));
    this.recipies.push(new Recipe('Lasagna 2', 'Good lasagna 1', 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-3.jpg'));
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods:Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.search)
      this.foods = this.foodService.getAllFoodBySearch(params.search)
      else if (params.tag)
      this.foods = this.foodService.getAllFoodByTag(params.tag)
      else
      this.foods = foodService.getAll();
    })
  }

  ngOnInit(): void {

  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods:Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable:Observable<Food[]>
    activatedRoute.params.subscribe((params) => {
      if(params.search)
      foodsObservable = this.foodService.getAllFoodBySearch(params.search)
      else if (params.tag)
      foodsObservable = this.foodService.getAllFoodByTag(params.tag)
      else
      foodsObservable = foodService.getAll();

      foodsObservable.subscribe((server) => {
        this.foods = server;
      })
    })
  }

  ngOnInit(): void {

  }

}

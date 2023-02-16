import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods:Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { Grocery } from '../shared/models/grocery.model'
import { GroceriesApiService } from '../service/groceries-api/groceries-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  groceries: Grocery[];

  constructor(private groceriesService: GroceriesApiService) {
    this.groceries = []
    this.groceriesService.getGroceries().subscribe(data => {
        this.groceries = data
        console.log(this.groceries)
      })
   }

  ngOnInit(): void {
  }

}

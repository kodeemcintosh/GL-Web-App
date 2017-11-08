import { Component, OnInit, Input } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { GroceryService } from '../_services/GroceryList.service';
import { GroceryItem } from '../_models/item.model';

@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // private fields for dependency injection
  private _groceryService: GroceryService;


  //other variables
  title: string = "Kodee's Grocery List App";

  @Input()
  list: Array<GroceryItem>;


  constructor(
    private http: HttpClient,
    private groceryService: GroceryService
  )
  {
    this._groceryService = groceryService;
    this.getGroceryList();
    
  }
  
  private getGroceryList() {
    this._groceryService.GetGroceryList()
      .subscribe((res) => { 
        res.forEach((item) => {
          this.list.push(new GroceryItem(item.name, item.quantity))
        });
      });
  }

  private addGroceryItem(item: string, quantity?: number): void{

    this._groceryService.UpdateGroceryList(item, quantity);
    this.getGroceryList();
  }

  private removeGroceryItem(item: string, quantity: number): void{

    this._groceryService.DeleteGroceryItem(item);
    this.getGroceryList();
  }
 
}

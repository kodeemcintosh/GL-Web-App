import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { GroceryItem } from './_models/item.model';
import { GroceryService } from './_services/GroceryList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // fields for dependency injection
  private _groceryService: GroceryService;

  title:string = "Kodee's Grocery List App";

  // inputName: string = "";
  // inputQuantity: number = null;
  groceryList: Array<GroceryItem>;
  newItem: GroceryItem;


  constructor(
    http: HttpClient,
    private groceryService: GroceryService
  )
  {
    this._groceryService = groceryService;
    
    this.newItem = new GroceryItem();
  }

  private getGroceryList(): void{

    this._groceryService.GetGroceryList()
      .subscribe((res) => {
        res.forEach((item) => {
          this.groceryList.push(new GroceryItem(item.name, item.quantity))
        });
      });
  }

  // private insertGroceryItem(): void{
  // private insertGroceryItem(item: string, quantity: number): void{
    //TODO figure out this object stuff!!!!!!!!!!!!!!
  private insertGroceryItem(item: GroceryItem): void{

    // this._GroceryService.InsertGroceryItem(item, quantity);
    //  TODO figure out this object stuff!!!!!!!!
    this._groceryService.InsertGroceryItem(item);
    this.getGroceryList();
    // this._GroceryService.InsertGroceryItem(this.inputName, this.inputQuantity);
  }

  private addGroceryItem(item: string, quantity?: number): void{

    this._groceryService.UpdateGroceryList(item, quantity);
    this.getGroceryList();
  }

  private removeGroceryItem(item: string, quantity: number): void{

    this._groceryService.RemoveGroceryItem(item, quantity);
    this.getGroceryList();
  }

  // public submit(item: string, quantity: number) {
  public submit(item: GroceryItem) {
    // this.insertGroceryItem(item, quantity);
    this.insertGroceryItem(item);
    // this.insertGroceryItem();
    this.getGroceryList();

  }
}

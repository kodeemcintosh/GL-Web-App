import { Component, Input, OnInit } from '@angular/core';
import { Subject as RxSubject, Observable as RxObservable } from 'rxjs/rx';

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
  items$: RxObservable<GroceryItem[]>;
  private rxRefresh = new RxSubject;

  title: string = "Kodee's Grocery List App";
  name: string;
  quantity: number;

  clearName() {
    this.name = '';
  }
  clearQuantity() {
    this.quantity = null;
  }

  constructor(
    public groceryService: GroceryService
  )
  {
    this._groceryService = groceryService;
    this.items$ = new RxObservable<GroceryItem[]>();

    this.rxRefresh.delay(10)
      .subscribe(() => {
        this.items$ = this._groceryService.GetGroceryList();
      });
  }

  ngOnInit() {
    this.items$ = this._groceryService.GetGroceryList();
    // this.rxRefresh.next();
  }

  private pullList() {
    this.clearName();
    this.clearQuantity();
    this.rxRefresh.next();
    // this.items$ = this._groceryService.GetGroceryList();
  }

  createGroceryItem(): void{

    this._groceryService.CreateGroceryItem(new GroceryItem(this.name, this.quantity))
      .subscribe();
    this.pullList();
  }

  public submit() {
    this._groceryService.CreateGroceryItem(new GroceryItem(this.name, this.quantity))
      .subscribe();
    this.pullList();
  }
}

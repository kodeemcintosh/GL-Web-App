import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable as RxObservable, Subject as RxSubject } from "rxjs/Rx";

import { GroceryService } from '../_services/GroceryList.service';
import { GroceryItem } from '../_models/item.model';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  // private fields for dependency injection
  private _groceryService: GroceryService;

  //other variables
  @Input() private item: GroceryItem;
  @Output() private refresh = new EventEmitter();
  private rxRefresh = new RxSubject;

  private title: string = "Kodee's Grocery List App";
  private quantity: number;

  constructor(
    public groceryService: GroceryService
  )
  {
    this._groceryService = groceryService;

    this.rxRefresh.delay(50)
      .subscribe(() => {
        this.refresh.emit();
      });
    }

  // TODO: figure out why there are multiple GET calls following POSTs
  // AND: figure out how to make component refresh GET calls to wait for the POSTs to finish
  // (i.e. fix the refresh bug)
  public addGroceryItem(name: string) {

    
    if (this.quantity == null)
    {
      this._groceryService.UpdateGroceryList(new GroceryItem(name, 1))
        .subscribe();
      this.rxRefresh.next();
    } else {

      this._groceryService.UpdateGroceryList(new GroceryItem(name, this.quantity))
        .subscribe();
        this.rxRefresh.next();
    }
  }

  public removeGroceryItem(name: string): void{
    if (this.quantity == null)
    {
      this._groceryService.RemoveGroceryItem(new GroceryItem(name, 1))
        .subscribe();
        this.rxRefresh.next();

    } else {
      this._groceryService.RemoveGroceryItem(new GroceryItem(name, this.quantity))
        .subscribe();
        this.rxRefresh.next();

    }
  }
}

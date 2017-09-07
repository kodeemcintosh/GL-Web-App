import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  title:string = "Kodee's Grocery List App";
  groceryList: Array<string>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.groceryList = this.getGroceryList();
    return 
  }

  private getGroceryList(): any {
    // this.http.get("localhost:2481/api/groceries")
      // .map((res: Response) => {
        // var data = res.json();
      //   // return data;
      // }
//      .subscribe((results) => {
//        var data = results;
          
//        })
//      });


  }
  

  public submit() {



  }
}

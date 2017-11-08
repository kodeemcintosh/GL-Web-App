import { Injectable } from "@angular/core";
// import { Http } from "@angular/Http";
import { HttpClient } from '@angular/common/Http';
import { Headers, RequestOptions } from '@angular/http';
import { DefaultHttpOptions } from './DefaultHttpOptions.service';

import { GroceryItem } from "../_models/item.model";
import { Observable as RxObservable } from "Rxjs/rx";

@Injectable()
export class GroceryService {
    private url: string = "http://localhost:2482/api/GroceryList";
    // private _header: Headers = new Headers({
    //         'Accept': 'application/json',
    //         'X-Requested-By': 'Angular 2',
    //         'Host': 'http://localhost:2482'
    // })
    // private url: string = "/api/GroceryList";

    constructor(private http:HttpClient)
    {
    } 

    public GetGroceryList(): RxObservable<GroceryItem[]> {
       
        return this.http.get(this.url)
            // .map((res) => { res }));
            .map((res) => res as GroceryItem[] || []);
    }

    // public InsertGroceryItem(itemName: string, quantity?: number): any{
    public InsertGroceryItem(item: GroceryItem): any{
        let header = new Headers({
        });
        let body = {
            // 'name': itemName,
            // 'quantity': quantity
            // 'item': item
            item
        };

        // let options = new RequestOptions({
        //     opts: new RequestOptionArgs({
        //         headers: new Headers({
        //             'Content-Type': 'application/json',
        //             'X-Request-By': 'Angular 2'
        //         })
        //     })
        // });

        // return this.http.put(this.url, body, options);
        return this.http.put(this.url, body);

    }
    
    public UpdateGroceryList(itemName: string, quantity?: number): any{
        var body = {
            'name': itemName,
            'quantity': quantity
        };
        if(quantity != null)
        {
            return this.http.put(this.url, body);
        } else {

            return this.http.put(this.url, { 'name': itemName });
        }

    }

    public RemoveGroceryItem(itemName: string, quantity: number): any{
        var body = {
            'name': itemName,
            'quantity': quantity
        };

        return this.http.put(this.url, body);
    }

    public DeleteGroceryItem(itemName: string): any{
        var body = {
            'name': itemName
        };

        return this.http.put(this.url, body);
    }
}

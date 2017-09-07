import { Injectable } from "@angular/core";
import { Http } from "@angular/Http";

import { GroceryItem } from "./item/GroceryItem";
import { Observable as RxObservable } from "Rxjs/rx";

@Injectable()
export class GroceryService {
    private url: string = "localhost:8482/api/GroceryList";

    private constructor(private http:Http) {
    } 
    public GetGroceryList(): RxObservable<GroceryItem[]> {
        return this.http.get(this.url)
            .map((res) => { res.json() })
            .catch((error: any) => RxObservable.throw(error.json().error || 'Server error'));
    }

    public InsertGroceryItem(item: string, quantity?: number): any{
        var body = {
            'name': item,
            'quantity': quantity
        };

        return this.http.put(this.url, body);

    }
    
    public UpdateGroceryList(item: string, quantity?: number): any{
        var body = {
            'name': item,
            'quantity': quantity
        };
        if(quantity)
        {
            return this.http.put(this.url, body);
        } else {

            return this.http.put(this.url, { 'name': item });
        }

    }

    public RemoveGroceryItem(item: string, quantity: number): any{
        var body = {
            'name': item,
            'quantity': quantity
        };

        return this.http.put(this.url, body);
    }

    public DeleteGroceryItem(item: string): any{
        var body = {
            'name': item
        };

        return this.http.put(this.url, body);
    }
}

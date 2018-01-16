import { Injectable } from "@angular/core";
// import { Http } from "@angular/Http";
import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { DefaultHttpOptions } from './DefaultHttpOptions.service';

import { GroceryItem } from "../_models/item.model";
import { Observable as RxObservable, Subscription } from "Rxjs/rx";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GroceryService {
    private _http: HttpClient;
    // private err: string;

    // private _header: Headers = new Headers({
    //         'Accept': 'application/json',
    //         'X-Requested-By': 'Angular 2',
    //         'Host': 'http://localhost:2482'
    // })
    // private url: string = "/api/GroceryList";

    constructor(public http:HttpClient)
    {
        this._http = http;
    } 

    public GetGroceryList(): RxObservable<GroceryItem[]> {
        var url: string = "http://localhost:2482/api/v1/GroceryList";
       
        let header = { 
            'headers': new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', 'application/json')
                .set('Host', 'http://localhost:2482')
                // .set('X-Requested-By', 'Angular 2')
        };

        return this._http.get<GroceryItem[]>(url, header);
    }

    public CreateGroceryItem(item: GroceryItem): any{
        var url: string = "http://localhost:2482/api/v1/GroceryList/Create";
        
        let header = { 
            'headers': new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Access-Control-Allow-Origin', '*')
                // .set('X-Requested-By', 'Angular 2')
        };

        let body = {
            'name': item.name,
            'quantity': item.quantity
        };

        return this._http.post(url, body, header);
    }
    
    public UpdateGroceryList(item: GroceryItem): any{
        var url: string = "http://localhost:2482/api/v1/GroceryList/Update";

        let header = { 
            'headers': new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Access-Control-Allow-Origin', '*')
                // .set('X-Requested-By', 'Angular 2')
        };

        let body = {
            'name': item.name,
            'quantity': item.quantity
        };

            return this._http.post(url, body, header);
    }

    public RemoveGroceryItem(item: GroceryItem): any {
        var url: string = "http://localhost:2482/api/v1/GroceryList/Delete";

        let header = { 
            'headers': new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Accept', 'application/json')
                // .set('X-Requested-By', 'Angular 2')
        };

        let body = {
            'name': item.name,
            'quantity': item.quantity
        };

        return this._http.post(url, body, header);
    }

    public DeleteGroceryItem(itemName: string): any{
        var url: string = "http://localhost:2482/api/v1/GroceryList/Delete";

        let header = { 
            'headers': new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Accept', 'application/json')
                // .set('X-Requested-By', 'Angular 2')
        };
        let body = {
            'name': itemName,
            'quantity': 0
        }

        return this._http.post(url, body, header);
    }
}

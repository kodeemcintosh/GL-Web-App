import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { GroceryService } from './_services/GroceryList.service';
import { DefaultHttpOptions } from './_services/DefaultHttpOptions.service';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from "@clr/angular";

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  // {
  //   path: '/',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
];



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ClarityModule
  ],
  providers: [
    {provide: RequestOptions, useClass: DefaultHttpOptions },
    GroceryService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Headers, RequestOptions, BaseRequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class DefaultHttpOptions extends BaseRequestOptions {
  headers = new Headers({
    'Content-Type': 'application/json',
    'X-Requested-By': 'Angular 2'
  });

  merge(options?: RequestOptionsArgs): RequestOptions {

    var newOptions = super.merge(options);
    newOptions.headers.set('X-Requeste-At', new Date().toISOString());
    return newOptions;
  }
}
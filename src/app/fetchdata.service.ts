import { Injectable } from '@angular/core';

@Injectable()
export class FetchdataService {
 public data = [];
  constructor() {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => this.data.push( data))
    .catch (err => console.log(err));
    console.log(this.data);
   }

}

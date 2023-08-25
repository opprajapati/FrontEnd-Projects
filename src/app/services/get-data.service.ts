import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
  }
  url = '/assets/customers.json';

  getDataCustomer() {
    console.log("ramram");
    return this.http.get(this.url);
  }
}

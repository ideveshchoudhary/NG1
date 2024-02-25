import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private http: HttpClient) { }

  getAllProducts() {

    return this.http.get('https://api.escuelajs.co/api/v1/products');

  }
}

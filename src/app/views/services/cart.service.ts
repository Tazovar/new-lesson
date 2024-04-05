import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
baseUrl:string = 'https://fakestoreapi.com'
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(`${this.baseUrl}/products`)
  }

  getByid(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/products/${id}`)
  }
}

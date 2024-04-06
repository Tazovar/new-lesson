import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private http:HttpClient) { }


  getAllCards():Observable<any>{
    return this.http.get('https://fakestoreapi.com/products')
  }
}

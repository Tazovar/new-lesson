import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
productsData$!:Observable<any>

  constructor(private cartservice:CartService){}
  ngOnInit(): void {
    this.productsData$ = this.cartservice.getAll()
  }
}

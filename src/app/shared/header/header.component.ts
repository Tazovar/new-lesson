import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/views/services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cardsInBasketCount:number = 0;
  constructor(private basketService:BasketService,private router:Router){}


  ngOnInit(): void {
    this.basketService.AddCardEmitter.subscribe((res) => {
this.cardsInBasketCount = res
    })
    this.basketService.deleteEmitter.subscribe((res) => {
      this.cardsInBasketCount = res.length
    })
  }

  showBasket(){
this.router.navigate(['/basket'])
  }
}

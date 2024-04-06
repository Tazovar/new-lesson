import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource!:Array<any>
  totalPriceVariable:number =0


  constructor(private basketService:BasketService){}
    ngOnInit(): void {
    this.dataSource = this.basketService.basketArray

    this.basketService.deleteCardEmitter.subscribe((newArray) => {
      console.log(newArray);
      this.dataSource = newArray
    })

    this.totalPrice()
  }

  deleteCard(cardId:number){
    this.basketService.deleteCardFromBasket(cardId)
    this.totalPrice()
  }

  totalPrice(){
    let some =  this.basketService.basketArray.reduce((previuse,current) => {
      return previuse + current.price
    },0)
    console.log(some);
    
    this.totalPriceVariable = some
  }
}

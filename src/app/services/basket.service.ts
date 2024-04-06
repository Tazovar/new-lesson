import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
basketArray:Array<any> = [];
addCardInBasketEmitter:EventEmitter<any> = new EventEmitter();
deleteCardEmitter:EventEmitter<any> = new EventEmitter();
addCardInBasket(card:any){
  let findCard = this.basketArray.find((cardd) => {
    return cardd.id == card.id
  })
  if(findCard){
alert('card already added')
  }else{
    this.basketArray.push(card)
    this.addCardInBasketEmitter.emit(this.basketArray)
  }
}


deleteCardFromBasket(cardId:number){

this.basketArray = this.basketArray.filter((card) => {
  return card.id != cardId
})


this.deleteCardEmitter.emit(this.basketArray)

}

  constructor() { }
}

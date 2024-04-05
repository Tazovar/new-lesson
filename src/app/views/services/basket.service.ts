import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  t:string = ''
  AddCardEmitter:EventEmitter<any> = new EventEmitter()
  deleteEmitter:EventEmitter<any> = new EventEmitter();
  basketArray:Array<any> = [];
  addCardInBasket(card:any){
    let findCard = this.basketArray.find((item) => {
      return item.id === card.id
    })
    if(findCard){
      alert("card already exists")
    }else{
      this.basketArray.push(card)
    }
  }

  deleteItem(id:number){

    this.basketArray =  this.basketArray.filter((item) => {
      return item.id != id
    })
    this.deleteEmitter.emit(this.basketArray)
  }
  constructor() { }
}

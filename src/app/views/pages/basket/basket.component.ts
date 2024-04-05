import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
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
  dataSource:any
  ngOnInit(): void {
      this.dataSource = this.getArray();
      this.basketService.deleteEmitter.subscribe((res) => {
        this.dataSource = res
        this.totalPrice()
      })
  }
  constructor(private basketService: BasketService) {}
  getArray(){
return this.basketService.basketArray
  }


  deleteItem(id:number){
this.basketService.deleteItem(id)
this.totalPrice()
  }

  totalPrice(){
    let totalPrice = this.getArray().reduce((sum,item) => {
      return sum + item.price
    },0)
return totalPrice
    
  }
}

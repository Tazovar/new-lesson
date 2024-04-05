import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestModalComponent } from 'src/app/test-modal/test-modal.component';
import { BasketService } from 'src/app/views/services/basket.service';
import { CartService } from 'src/app/views/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() card:any

constructor(private basketService:BasketService,private dialog:MatDialog){}

addCard(){
this.basketService.addCardInBasket(this.card)
this.basketService.AddCardEmitter.emit(this.basketService.basketArray.length)
}


openModal(){
let dialog = this.dialog.open(TestModalComponent , {
  data:this.card.price,
  width:'60%',
  height:'60%'
})

dialog.afterClosed()
.subscribe((res) => {
  console.log(res)
})

}

}

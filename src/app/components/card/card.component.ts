import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() card:any
constructor(private matDialog:MatDialog,private basketService:BasketService){}

addCardInBasket():void{
  this.basketService.addCardInBasket(this.card)
}

seeDetails(){
  const modal = this.matDialog.open(DetailComponent, {
    data:this.card,
    width:'90%',
    height:'90%'
  })

  modal.afterClosed()
  .subscribe((res) => {
    console.log(res)
  })
}
}

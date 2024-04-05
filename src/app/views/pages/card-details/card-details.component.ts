import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
res:any = {}
  constructor(private cartservice:CartService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=> {
      let id = param['id']

      if(id){
        this.cartservice.getByid(id)
        .subscribe((response) => {
          this.res = {...response}
        })
      }
    })
  }
}

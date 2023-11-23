import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../../data/dataFake';


  type Post =
    {
      id:string, 
      photo:string, 
      title:string, 
      description:string
    };


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.responsive.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  @Input()
  bigCard:Post = {id:"", photo:"", title:"", description:""};
  @Input()
  smallCards:Post[] = [{id:"", photo:"", title:"", description:""}];
  private smallCardsAmount = 3;

  ngOnInit(): void {
    this.bigCard = dataFake[dataFake.length - 1];
    console.log(this.bigCard);    

    this.smallCards = dataFake.slice(dataFake.length -1 - this.smallCardsAmount, dataFake.length - 1).reverse();

  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  @Input()fromaddfood :string;
  @Output()toaddfood = new EventEmitter();

  names =[
  
    {name:"add"}
    
    
  ];

  constructor() { }

  ngOnInit() {
  }
  addToCart(nm){
    console.log(nm);
    this.toaddfood.emit(nm);
  };

}

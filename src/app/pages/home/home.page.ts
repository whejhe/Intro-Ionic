import { Component, OnInit } from '@angular/core';
import { ComponentClass } from 'src/model/componentClass';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public components: ComponentClass[] =[
    {
      name: "Action Sheet", 
      path:"/action-sheet",
      color:"primary",
      icon:"airplane",
    },
    {
      name: "Alert", 
      path:"/alert",
      color:"secondary",
      icon:"alarm",
    },
    {
      name: "Card", 
      path:"/card",
      color:"tertiary",
      icon:"albums",
    },
    {
      name: "Camera",
      path:"/camera",
      color:"success",
      icon:"camera",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

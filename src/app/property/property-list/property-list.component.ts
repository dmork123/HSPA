import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Type": "House",
      "Name" : "David",
      "Price": 12000
    },
    {
      "Id": 2,
      "Type": "Erouse Villa",
      "Name" : "Tony",
      "Price": 14000
    },
    {
      "Id": 3,
      "Type": "Appartment ",
      "Name" : "Davo",
      "Price": 15000
    },
    {
      "Id": 4,
      "Type": "Macro House",
      "Name" : "Baza",
      "Price": 16000
    },
    {
      "Id": 5,
      "Type": "Macro appartment",
      "Name" : "House",
      "Price": 18000
    },
    {
      "Id": 6,
      "Type": "Macro House",
      "Name" : "Baza",
      "Price": 22000
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}

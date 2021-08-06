import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProprty.interface';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm | undefined
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  propertyType: Array<string> = ['House', 'Apartment', 'Duplex'];
  FurnishType: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  readyToMoveType: Array<string> = ['East', 'West', 'South', "North"];
  propertyView: IProperty = {
    Id: 0,
    Name: '',
    Price: 0,
    SellRent: 0,
    Type: ""
  };

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    console.log("button pressed");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}

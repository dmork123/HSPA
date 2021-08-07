import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';
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

  propertyView: IPropertyBase = {
    Id: 0,
    Name: '',
    Price: 0,
    SellRent: 0,
    PType: "",
    FType: "",
    BHK: 0,
    BuiltArea: 0,
    City: "",
    RTM:0
  };

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    console.log("Congrats form submitted");
    console.log('SellRent=' + this.addPropertyForm?.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}

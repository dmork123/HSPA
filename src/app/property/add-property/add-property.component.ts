import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm: NgForm | undefined
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  addPropertyForm!: FormGroup;

  propertyType: Array<string> = ['House', 'Apartment', 'Duplex'];
  FurnishType: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  readyToMoveType: Array<string> = ['East', 'West', 'South', "North"];
  nextClicked!: Boolean;

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

  constructor(private fb: FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null, Validators.required],
        PType: [null, Validators.required],
        Name: [null, Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required]
      })

    })
  }
  // ------------------
  // Getter Methods
  // ------------------
  get BasicInfo() {
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }

  get SellRent() {
    console.log(this.addPropertyForm.controls.SellRent)
    return this.addPropertyForm.controls.SellRent as FormGroup;
  }

  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    console.log("Congrats form submitted");
    console.log('SellRent=' + this.addPropertyForm?.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if(IsCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}

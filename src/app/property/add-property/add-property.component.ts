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
    Id: null,
    Name: null,
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null
  };

  constructor(private fb: FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: ['1', Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null],
      }),
      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null]
      }),
      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PosessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
    })
  }
  // ------------------
  // Getter Methods
  // # Region Getter methods
      // Region <FormGroups>
  // ------------------
//#region <Getter Methods>
  //#region <FormGroups>
    get BasicInfo() {
      return this.addPropertyForm.controls.BasicInfo as FormGroup;
    }

    get PriceInfo() {
      return this.addPropertyForm.controls.PriceInfo as FormGroup;
    }

    get AddressInfo() {
      return this.addPropertyForm.controls.AddressInfo as FormGroup;
    }

    get OtherInfo() {
      return this.addPropertyForm.controls.OtherInfo as FormGroup;
    }


  //#endregion
  //#region <FormControl>
  get SellRent() {
    // console.log(this.addPropertyForm.controls.BasicInfo?.controls.SellRent.status)
    return this.BasicInfo.controls.SellRent as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls.Price as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls.RTM as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls.BHK as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls.Name as FormControl;
  }

  get PType() {
    return this.BasicInfo.controls.PType as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls.FType as FormControl;
  }

  get City() {
    return this.BasicInfo.controls.City as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls.Address as FormControl;
  }

  //#endregion

  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    this.nextClicked=true;
    if(this.allTabsValid()) {
      console.log("Congrats form submitted");
      console.log('SellRent=' + this.addPropertyForm?.value.BasicInfo.SellRent);
      console.log(this.addPropertyForm);
    } else {
      console.log("Please review the form and provide all valid entries");
    }

  }

  allTabsValid(): boolean {

    if(this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if(this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if(this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if(this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }
  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    console.log(this.BasicInfo);
    if(IsCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}

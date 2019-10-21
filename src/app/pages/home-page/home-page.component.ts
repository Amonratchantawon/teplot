import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  numberFormGroup: FormGroup;
  numberFormGroups: FormArray;
  isEditable = false;
  myForm: FormGroup;
  buildDataPost

  data = {
    companies: [
      {
        number: "example comany",
        priceTop: "example comany",
        priceButton: "example comany",
      }
    ]
  }

  formNextStep

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.myForm = this._formBuilder.group({
      companies: this._formBuilder.array([])
    })
    this.addNewCompany();
  }

  getFromNextStep() {
    this.formNextStep = {
      name: this.firstFormGroup.get("firstCtrl").value,
      date: this.secondFormGroup.get("secondCtrl").value
    }
  }

  addNewCompany() {
    let control = <FormArray>this.myForm.controls.companies;
    control.push(
      this._formBuilder.group({
        number: [''],
        priceTop: [''],
        priceButton: [''],
      })
    )
  }

  deleteCompany(index) {
    let control = <FormArray>this.myForm.controls.companies;
    control.removeAt(index)
  }

  setCompanies() {
    let control = <FormArray>this.myForm.controls.companies;
    this.data.companies.forEach(x => {
      control.push(this._formBuilder.group({
        company: x.number,
        company2: x.priceTop,
        company3: x.priceButton,
      }))
    })
  }

  buildData(){
    this.buildDataPost = {
      date: this.secondFormGroup.get("secondCtrl").value,
      name: this.firstFormGroup.get("firstCtrl").value,
      items: this.myForm.get("companies").value,
    }
    console.log(this.buildDataPost)
  }
}

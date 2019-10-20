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

  data = {
    companies: [
      {
        company: "example comany",
        company2: "example comany",
        company3: "example comany",
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
        company: [''],
        company2: [''],
        company3: [''],
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
        company: x.company,
        company2: x.company2,
        company3: x.company3,
      }))
    })
  }

  // setProjects(x) {
  //   let arr = new FormArray([])
  //   x.projects.forEach(y => {
  //     arr.push(this._formBuilder.group({
  //       projectName: y.projectName
  //     }))
  //   })
  //   return arr;
  // }
}

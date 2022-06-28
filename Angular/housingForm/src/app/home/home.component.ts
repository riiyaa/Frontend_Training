import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    if(this._service.arrayIndex != undefined || this._service.arrayIndex != null){
      this.update(this._service.arrayIndex)
    }else {
      this._service.isShow = false
    }
  }

  housingForm: FormGroup;

  constructor(public fb: FormBuilder, public _service:AppService) {
    this.housingForm = this.fb.group({
      details:this.fb.array([],[Validators.required]),
    })
  }

  details(): FormArray {
    // @ts-ignore
    return this.housingForm.get("details") as FormArray
  }

  newForm(): FormGroup {
    return this.fb.group({
      hName:['',Validators.required],
      hType:['small',Validators.required],
      id:[this._service.makeId(7)],
      addresses:this.fb.array([])
    })
  }


  addMore() {
    this._service.isShow= true
    this._service.isUpdate=false
    this._service.array = []
    this.details().push(this.newForm())
  }

  removeEmployee(mainIndex: number) {
    this.details().removeAt(mainIndex);
    this.onSubmit(mainIndex)
  }
  newAddress():FormGroup{
    return this.fb.group({
      plot: ['',Validators.required],
      area: ['',Validators.required],
      pin:['',[Validators.required,Validators.pattern('[0-9]{6}')]],
      person: this.fb.array([])
    })
  }
  addAddress(mainIndex: any) {
    // @ts-ignore
    this.address(mainIndex).push(this.newAddress());
  }

  address(mainIndex:any):FormArray {
    // @ts-ignore
    return this.details().at(mainIndex).get("addresses") as FormArray
  }
  newPerson():FormGroup{
    return this.fb.group({
      fName: ['',Validators.required],
      age: ['',Validators.required],
      gender:'male',
    })
  }
  addPerson(addIndex: any,mainIndex:any) {
    // @ts-ignore
    this.persons(addIndex,mainIndex).push(this.newPerson());
  }

  persons(addIndex: any,mainIndex:any):FormArray {
    // @ts-ignore
    return this.address(mainIndex).at(addIndex).get("person") as FormArray
  }

  onSubmit(mainIndex:any) {
    if(this._service.isUpdate){
      // @ts-ignore
      this._service.array.splice(this._service.arrayIndex, 1,this.details().at(mainIndex).value);
    }else {
      // @ts-ignore
      if(JSON.parse(localStorage.getItem("Details")) != null){
        // @ts-ignore
        this._service.array = JSON.parse(localStorage.getItem("Details"))
      }else {
        this._service.array = []
      }
      // @ts-ignore
      this._service.array.push(this.details().at(mainIndex).value)
    }
    this._service.array = this._service.array.flat()
    localStorage.setItem("Details",JSON.stringify(this._service.array))
    this.details().removeAt(mainIndex)
  }

  update(i:any) {
    this._service.isShow = true
    this._service.isUpdate = true
    const data: any = this._service.array[i];
    const house = this.newForm()
    house.patchValue({
      hName: data.hName,
      hType: data.hType,
      id: data.id
    });
    this.details().push(house)

    data.addresses.forEach((a:any) => {
      const address = this.newAddress()
      address.patchValue({
        plot:a.plot,
        area:a.area,
        pin:a.pin
      });
      ((this.housingForm.controls['details'] as FormArray).at(0).get('addresses') as FormArray).push(address);
      // tslint:disable-next-line:max-line-length
    });

    for(let i in data.addresses){
      data.addresses[i].person.forEach((a:any)=>{
        const add = this.newPerson();
        add.patchValue({
          fName:a.fName,
          age:a.age,
          gender:a.gender
        });
        (((this.housingForm.controls['details'] as FormArray).at(0).get('addresses') as FormArray).at(Number(i)).get('person') as FormArray).push(add);
      })
    }
  }
  }

import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }
  public reactive: any
  ngOnInit() {
    this.reactive = this._fb.group({
      mail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      pass:['',[Validators.required,Validators.minLength(6)]],
      itemRows: this._fb.array([this.initItemRows()])
    })
  }
  // reactive = new FormGroup({
  //   mail:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //   pass:new FormControl('',[Validators.required,Validators.minLength(6)])
  // })

  get formArr() {
    return this.reactive.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this._fb.group({
      timeRange:[''],
      learn:[''],
      descripition:[''],
      suggestion:[''],
    });
  }
  onSubmit(val:any) {
    if(this.reactive?.valid){
      console.log(val)
    }
    this.reactive?.reset()
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
}

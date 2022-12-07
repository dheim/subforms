import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AddressComponent} from "../address/address.component";
import {AddressFormGroup} from "../address/address-form-group";

@Component({
  selector: 'app-persoenliche-angaben',
  templateUrl: './persoenliche-angaben.component.html',
  styleUrls: ['./persoenliche-angaben.component.scss']
})
export class PersoenlicheAngabenComponent implements OnInit {
  form: FormGroup<{ address: FormGroup<AddressFormGroup> }>;

  constructor() {
    this.form = new FormGroup({
      address: AddressComponent.createFormGroup()
    })

    this.form.valueChanges.subscribe({
      next: () => {
        console.log(this.form.value);
      }
    })
  }


  ngOnInit(): void {
  }

}

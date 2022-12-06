import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AddressFormGroup} from "./address-form-group";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() addressForm!: FormGroup<AddressFormGroup>

  constructor() { }

  ngOnInit(): void {
  }

  static createFormGroup(): FormGroup<AddressFormGroup> {
    return new FormGroup({
      lastName: new FormControl<string>('', {nonNullable: true}),
      firstName: new FormControl<string>('', {nonNullable: true}),
      street: new FormControl<string>('', {nonNullable: true}),
      houseNumber: new FormControl<string>('', {nonNullable: true}),
      postCode: new FormControl<number | undefined>(undefined),
      city: new FormControl<string>('', {nonNullable: true})
    });
  }
}

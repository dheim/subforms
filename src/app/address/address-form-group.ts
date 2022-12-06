import {FormControl} from "@angular/forms";

export interface AddressFormGroup {
  lastName: FormControl<string>;
  firstName: FormControl<string>;
  city: FormControl<string>;
  street: FormControl<string>;
  houseNumber: FormControl<string>;
  postCode: FormControl<number | undefined | null>
}

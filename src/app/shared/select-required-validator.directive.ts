import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
  selector: "[appSelectValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectRequiredValidator,
      multi: true
    }
  ]
})
export class SelectRequiredValidator implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    return (control && control.value && control.value.Code) === "" ? { selectRequired: true } : null;
  }
}

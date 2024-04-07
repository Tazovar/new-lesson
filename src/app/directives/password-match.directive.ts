import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:PasswordMatchDirective,
      multi:true
    }
  ]
})
export class PasswordMatchDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let password = control.get("password")
    let confirmPassword = control.get("confirmPassword");
    let error = {appPasswordMatch:{mismatch:true}}
    if(password?.value == confirmPassword?.value || confirmPassword?.value == '' || confirmPassword?.value == undefined){
      return null;
    }

    confirmPassword?.setErrors(error)

    return error;
  }

}

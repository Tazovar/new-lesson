import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPattern]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:PatternDirective,
      multi:true
    }
  ]
})
export class PatternDirective implements Validator {

  constructor() { }
bigWordPattern:any = /[A-Z]/
smallWordPattern:any = /[a-z]/
numberPattern:any = /[0-9]{2}/
symbolPattern:any = /[!@#$%^&*( _ )]/

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(!this.bigWordPattern.test(control.value) || !this.smallWordPattern.test(control.value) || !this.numberPattern.test(control.value) || !this.symbolPattern.test(control.value)){
      return {appPattern:{text:`password does not contains [A-Z] or [a-z] or [0-9] or [!@#$%^&*( _ )]`}}

    }else{
      return null
    }

  }

}

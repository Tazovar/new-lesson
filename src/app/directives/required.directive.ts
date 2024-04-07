import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appRequired]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:RequiredDirective,
      multi:true
    }
  ]
})
export class RequiredDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): any {
    let temp  

    if(!control.value){
      return {'required':true}
    }
    else{
      if(control?.value.includes(' ')){
           temp = control.value.replaceAll(' ', '')
           control.setValue(temp);

        } 
    }
    }

}

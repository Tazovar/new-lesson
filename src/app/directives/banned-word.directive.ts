import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appBannedWord]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:BannedWordDirective,
      multi:true
    }
  ]
})
export class BannedWordDirective implements Validator {
bannedWordsArray:Array<string> = []
  @Input()
  set appBannedWord(value:string | string[]){
this.bannedWordsArray = Array.isArray(value) ? value : [value]
  }
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
let findBannedWords =this.bannedWordsArray.find((word) => {
  return word?.toLowerCase() == control.value?.toLowerCase()
})

return !findBannedWords 
? null : {appBannedWord:{findBannedWords}}
  }

}

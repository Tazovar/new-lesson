import { HttpClient } from '@angular/common/http';
import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { map } from 'rxjs';

@Directive({
  selector: '[appTakenUsername]',
  providers:[
    {
      provide:NG_ASYNC_VALIDATORS,
      useExisting:TakenUsernameDirective,
      multi:true
    }
  ]
})
export class TakenUsernameDirective implements Validator {

  constructor(private http:HttpClient) { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.http.get(`https://jsonplaceholder.typicode.com/users?username=${control.value}`)
    .pipe(
      map((users:any) => {
        return users.length == 0
        ? null : {appTakenUsername:{control:control.value}}
      })
    )
  }

}

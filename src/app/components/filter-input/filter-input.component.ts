import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.css']
})
export class FilterInputComponent {
@Output() textEmitter:EventEmitter<string> = new EventEmitter();


searchTextFunc(event:any){
let value = event.target.value
this.textEmitter.emit(value)
}
}

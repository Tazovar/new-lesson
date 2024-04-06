import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Array<any>, searchText:any):any {
  if(searchText == '' || searchText == undefined){
    return  value
  }
  return value.filter((item:any) => {
    return item?.title?.toLowerCase().includes(searchText?.toLowerCase())
  })
  }

}

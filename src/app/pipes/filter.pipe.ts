import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    
    if(value.length === 0 || filteredString === ''){
     
      return value;
    }
      const userData = []; 
      for(const user of value){
        if(user.name == filteredString){
           userData.push(user);
        }
      } 
      return userData;
    }
    
  

}

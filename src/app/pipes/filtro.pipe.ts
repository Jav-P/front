import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultColsult = [];
    for( const pacientes of value){
      if (pacientes.indexOF(arg)>-1) {
        resultColsult.push(pacientes)   
      }
    }
    return resultColsult;
  }

}

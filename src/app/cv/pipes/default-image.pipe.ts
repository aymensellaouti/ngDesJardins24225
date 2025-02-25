import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONSTANTES } from 'src/app/config/app-constantes.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string, defaultPath = APP_CONSTANTES.defaultImage): string {
    return path.trim() ? path : defaultPath ;
  }
}

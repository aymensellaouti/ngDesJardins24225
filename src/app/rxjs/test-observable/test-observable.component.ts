import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
 toaster = inject(ToastrService);
 observable$: Observable<number> = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
  constructor() {
    // setTimeout(() => {
      this.observable$.subscribe({
        next: (val) => {
          console.log(val);
        },
      },);

    // },3000)
    this.observable$
    // 5 4 3 2 1
    .pipe(
      map( valeur => valeur * 3 ),
      // 15 12 9 6 3
      filter( val => val % 2 == 0),
      // 12 6
    )
    .subscribe({
      next: (val) => {
        this.toaster.info('' + val);
      },
      complete: () => {
        this.toaster.error('Fin du compte à rebours !')
      }
    });
  }

}

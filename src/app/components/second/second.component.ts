import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <p>Second fonctionne</p>
  `,
  styles: [``]
})
export class SecondComponent {
  acr = inject(ActivatedRoute);
  constructor() {
    this.acr.snapshot.params['id']
  }
}

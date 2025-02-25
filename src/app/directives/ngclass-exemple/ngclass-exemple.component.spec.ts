import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassExempleComponent } from './ngclass-exemple.component';

describe('NgclassExempleComponent', () => {
  let component: NgclassExempleComponent;
  let fixture: ComponentFixture<NgclassExempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgclassExempleComponent]
    });
    fixture = TestBed.createComponent(NgclassExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

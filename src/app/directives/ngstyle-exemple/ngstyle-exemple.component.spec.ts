import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleExempleComponent } from './ngstyle-exemple.component';

describe('NgstyleExempleComponent', () => {
  let component: NgstyleExempleComponent;
  let fixture: ComponentFixture<NgstyleExempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgstyleExempleComponent]
    });
    fixture = TestBed.createComponent(NgstyleExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

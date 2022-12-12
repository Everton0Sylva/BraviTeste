import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer3Component } from './exer3.component';

describe('Exer3Component', () => {
  let component: Exer3Component;
  let fixture: ComponentFixture<Exer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

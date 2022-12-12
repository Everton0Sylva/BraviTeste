import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer1Component } from './exer1.component';

describe('Exer1Component', () => {
  let component: Exer1Component;
  let fixture: ComponentFixture<Exer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaSaveComponent } from './pessoa-save.component';

describe('PessoaSaveComponent', () => {
  let component: PessoaSaveComponent;
  let fixture: ComponentFixture<PessoaSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

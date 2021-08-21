import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAcerdaDeComponent } from './dialog-acerda-de.component';

describe('DialogAcerdaDeComponent', () => {
  let component: DialogAcerdaDeComponent;
  let fixture: ComponentFixture<DialogAcerdaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAcerdaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAcerdaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

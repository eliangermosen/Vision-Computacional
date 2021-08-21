import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComoUsarComponent } from './dialog-como-usar.component';

describe('DialogComoUsarComponent', () => {
  let component: DialogComoUsarComponent;
  let fixture: ComponentFixture<DialogComoUsarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComoUsarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComoUsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIdentificarComponent } from './dialog-identificar.component';

describe('DialogIdentificarComponent', () => {
  let component: DialogIdentificarComponent;
  let fixture: ComponentFixture<DialogIdentificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogIdentificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIdentificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

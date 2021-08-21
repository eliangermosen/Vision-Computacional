import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificarSenaComponent } from './identificar-sena.component';

describe('IdentificarSenaComponent', () => {
  let component: IdentificarSenaComponent;
  let fixture: ComponentFixture<IdentificarSenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificarSenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificarSenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

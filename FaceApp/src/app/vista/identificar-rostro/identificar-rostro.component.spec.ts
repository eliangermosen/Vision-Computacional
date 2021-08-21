import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificarRostroComponent } from './identificar-rostro.component';

describe('IdentificarRostroComponent', () => {
  let component: IdentificarRostroComponent;
  let fixture: ComponentFixture<IdentificarRostroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificarRostroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificarRostroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

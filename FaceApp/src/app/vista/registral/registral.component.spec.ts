import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistralComponent } from './registral.component';

describe('RegistralComponent', () => {
  let component: RegistralComponent;
  let fixture: ComponentFixture<RegistralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

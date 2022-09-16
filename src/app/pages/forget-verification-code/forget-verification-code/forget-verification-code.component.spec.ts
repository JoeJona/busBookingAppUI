import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetVerificationCodeComponent } from './forget-verification-code.component';

describe('ForgetVerificationCodeComponent', () => {
  let component: ForgetVerificationCodeComponent;
  let fixture: ComponentFixture<ForgetVerificationCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetVerificationCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetVerificationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

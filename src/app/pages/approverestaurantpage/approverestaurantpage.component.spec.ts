import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverestaurantpageComponent } from './approverestaurantpage.component';

describe('ApproverestaurantpageComponent', () => {
  let component: ApproverestaurantpageComponent;
  let fixture: ComponentFixture<ApproverestaurantpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproverestaurantpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproverestaurantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

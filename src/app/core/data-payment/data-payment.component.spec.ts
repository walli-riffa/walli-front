import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPaymentComponent } from './data-payment.component';

describe('DataPaymentComponent', () => {
  let component: DataPaymentComponent;
  let fixture: ComponentFixture<DataPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderscancellationComponent } from './orderscancellation.component';

describe('OrderscancellationComponent', () => {
  let component: OrderscancellationComponent;
  let fixture: ComponentFixture<OrderscancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderscancellationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderscancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

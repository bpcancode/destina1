import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductadvisoryComponent } from './productadvisory.component';

describe('ProductadvisoryComponent', () => {
  let component: ProductadvisoryComponent;
  let fixture: ComponentFixture<ProductadvisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductadvisoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductadvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

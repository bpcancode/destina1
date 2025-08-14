import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcatdetailsComponent } from './productcatdetails.component';

describe('ProductcatdetailsComponent', () => {
  let component: ProductcatdetailsComponent;
  let fixture: ComponentFixture<ProductcatdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcatdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcatdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

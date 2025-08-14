import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingcheifComponent } from './marketingcheif.component';

describe('MarketingcheifComponent', () => {
  let component: MarketingcheifComponent;
  let fixture: ComponentFixture<MarketingcheifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingcheifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingcheifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercartComponent } from './headercart.component';

describe('HeadercartComponent', () => {
  let component: HeadercartComponent;
  let fixture: ComponentFixture<HeadercartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadercartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadercartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

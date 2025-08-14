import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardstestComponent } from './awardstest.component';

describe('AwardstestComponent', () => {
  let component: AwardstestComponent;
  let fixture: ComponentFixture<AwardstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardstestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

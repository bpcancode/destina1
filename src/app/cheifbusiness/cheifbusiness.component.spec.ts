import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheifbusinessComponent } from './cheifbusiness.component';

describe('CheifbusinessComponent', () => {
  let component: CheifbusinessComponent;
  let fixture: ComponentFixture<CheifbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheifbusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheifbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheifstrategyComponent } from './cheifstrategy.component';

describe('CheifstrategyComponent', () => {
  let component: CheifstrategyComponent;
  let fixture: ComponentFixture<CheifstrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheifstrategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheifstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

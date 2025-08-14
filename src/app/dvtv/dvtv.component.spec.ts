import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvtvComponent } from './dvtv.component';

describe('DvtvComponent', () => {
  let component: DvtvComponent;
  let fixture: ComponentFixture<DvtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvtvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

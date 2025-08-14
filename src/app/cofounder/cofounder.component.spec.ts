import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofounderComponent } from './cofounder.component';

describe('CofounderComponent', () => {
  let component: CofounderComponent;
  let fixture: ComponentFixture<CofounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CofounderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KritiliaComponent } from './kritilia.component';

describe('KritiliaComponent', () => {
  let component: KritiliaComponent;
  let fixture: ComponentFixture<KritiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KritiliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KritiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

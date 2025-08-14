import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdynamicComponent } from './newsdynamic.component';

describe('NewsdynamicComponent', () => {
  let component: NewsdynamicComponent;
  let fixture: ComponentFixture<NewsdynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsdynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsdynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbusinessComponent } from './groupbusiness.component';

describe('GroupbusinessComponent', () => {
  let component: GroupbusinessComponent;
  let fixture: ComponentFixture<GroupbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupbusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

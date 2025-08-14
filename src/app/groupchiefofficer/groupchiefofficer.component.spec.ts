import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupchiefofficerComponent } from './groupchiefofficer.component';

describe('GroupchiefofficerComponent', () => {
  let component: GroupchiefofficerComponent;
  let fixture: ComponentFixture<GroupchiefofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupchiefofficerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupchiefofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

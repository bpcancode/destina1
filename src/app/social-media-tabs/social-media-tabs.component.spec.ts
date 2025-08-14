import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaTabsComponent } from './social-media-tabs.component';

describe('SocialMediaTabsComponent', () => {
  let component: SocialMediaTabsComponent;
  let fixture: ComponentFixture<SocialMediaTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

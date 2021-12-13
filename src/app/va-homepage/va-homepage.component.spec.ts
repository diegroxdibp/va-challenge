import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaHomepageComponent } from './va-homepage.component';

describe('VaHomepageComponent', () => {
  let component: VaHomepageComponent;
  let fixture: ComponentFixture<VaHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

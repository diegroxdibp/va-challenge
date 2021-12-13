import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaNavbarComponent } from './va-navbar.component';

describe('VaNavbarComponent', () => {
  let component: VaNavbarComponent;
  let fixture: ComponentFixture<VaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

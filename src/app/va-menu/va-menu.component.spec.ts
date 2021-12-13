import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaMenuComponent } from './va-menu.component';

describe('VaMenuComponent', () => {
  let component: VaMenuComponent;
  let fixture: ComponentFixture<VaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

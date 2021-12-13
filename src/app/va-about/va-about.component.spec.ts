import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaAboutComponent } from './va-about.component';

describe('VaAboutComponent', () => {
  let component: VaAboutComponent;
  let fixture: ComponentFixture<VaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

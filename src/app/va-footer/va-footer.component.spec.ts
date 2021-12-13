import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaFooterComponent } from './va-footer.component';

describe('VaFooterComponent', () => {
  let component: VaFooterComponent;
  let fixture: ComponentFixture<VaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

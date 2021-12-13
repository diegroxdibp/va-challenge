import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaProjectComponent } from './va-project.component';

describe('VaProjectComponent', () => {
  let component: VaProjectComponent;
  let fixture: ComponentFixture<VaProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

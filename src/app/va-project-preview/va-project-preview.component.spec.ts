import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaProjectPreviewComponent } from './va-project-preview.component';

describe('VaProjectPreviewComponent', () => {
  let component: VaProjectPreviewComponent;
  let fixture: ComponentFixture<VaProjectPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaProjectPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaProjectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

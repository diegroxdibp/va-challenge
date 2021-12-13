import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaHamburguerMenuComponent } from './va-hamburguer-menu.component';

describe('VaHamburguerMenuComponent', () => {
  let component: VaHamburguerMenuComponent;
  let fixture: ComponentFixture<VaHamburguerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaHamburguerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaHamburguerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

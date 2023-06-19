import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuesquedaHComponent } from './buesqueda-h.component';

describe('BuesquedaHComponent', () => {
  let component: BuesquedaHComponent;
  let fixture: ComponentFixture<BuesquedaHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuesquedaHComponent]
    });
    fixture = TestBed.createComponent(BuesquedaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

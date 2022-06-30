import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExursionsComponent } from './exursions.component';

describe('ExursionsComponent', () => {
  let component: ExursionsComponent;
  let fixture: ComponentFixture<ExursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExursionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

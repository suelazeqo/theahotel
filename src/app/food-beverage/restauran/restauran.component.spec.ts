import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranComponent } from './restauran.component';

describe('RestauranComponent', () => {
  let component: RestauranComponent;
  let fixture: ComponentFixture<RestauranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

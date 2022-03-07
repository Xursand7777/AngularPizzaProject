import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBasketComponent } from './app-basket.component';

describe('AppBasketComponent', () => {
  let component: AppBasketComponent;
  let fixture: ComponentFixture<AppBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockerMarketMainComponent } from './stocker-market-main.component';

describe('StockerMarketMainComponent', () => {
  let component: StockerMarketMainComponent;
  let fixture: ComponentFixture<StockerMarketMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockerMarketMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockerMarketMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

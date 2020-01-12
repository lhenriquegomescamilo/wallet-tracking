import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockerMarketNewComponent } from './stocker-market-new.component';

describe('StockerMarketNewComponent', () => {
  let component: StockerMarketNewComponent;
  let fixture: ComponentFixture<StockerMarketNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockerMarketNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockerMarketNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

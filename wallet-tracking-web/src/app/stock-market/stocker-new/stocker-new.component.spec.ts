import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockerNewComponent } from './stocker-new.component';

describe('StockerNewComponent', () => {
  let component: StockerNewComponent;
  let fixture: ComponentFixture<StockerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

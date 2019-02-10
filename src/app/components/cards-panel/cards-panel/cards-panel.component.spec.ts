import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPanelComponent } from './cards-panel.component';

describe('CardsPanelComponent', () => {
  let component: CardsPanelComponent;
  let fixture: ComponentFixture<CardsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

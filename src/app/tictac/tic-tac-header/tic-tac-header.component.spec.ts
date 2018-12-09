import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacHeaderComponent } from './tic-tac-header.component';

describe('TicTacHeaderComponent', () => {
  let component: TicTacHeaderComponent;
  let fixture: ComponentFixture<TicTacHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTacHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

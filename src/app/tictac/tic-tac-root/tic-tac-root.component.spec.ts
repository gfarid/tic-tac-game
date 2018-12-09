import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacRootComponent } from './tic-tac-root.component';

describe('TicTacRootComponent', () => {
  let component: TicTacRootComponent;
  let fixture: ComponentFixture<TicTacRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTacRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

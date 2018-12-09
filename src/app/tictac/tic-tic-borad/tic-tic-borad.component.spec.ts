import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTicBoradComponent } from './tic-tic-borad.component';

describe('TicTicBoradComponent', () => {
  let component: TicTicBoradComponent;
  let fixture: ComponentFixture<TicTicBoradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTicBoradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTicBoradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

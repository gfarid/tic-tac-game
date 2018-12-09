import { Component, OnInit } from '@angular/core';
import { PlaceMode } from '../model/enums/placeMode';
import { CellData } from '../model/board-model';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-tic-tic-borad',
  templateUrl: './tic-tic-borad.component.html',
  styleUrls: ['./tic-tic-borad.component.scss']
})
export class TicTicBoradComponent implements OnInit {

  board: Array<CellData> = [];

  rows = [0,1,2];
  columns = [0,1,2];

  isWinner;
  winner;
  actions = 0;

  constructor(private helperService: HelperService){}
 
  clearBoard() {
    this.helperService.clearBoard(this.board).subscribe(res=> {
      this.isWinner = res.isWinner;
      this.actions = res.actions;
    });
  }
  
  cellClick(value: CellData) {
    if(this.helperService.isWinner){ return; }
    let index = value.row * 3 + value.column;
    this.board[index].place = this.helperService.currentPlayer;
    this.helperService.actions++;
    this.helperService.changePlayer();

    this.helperService.checkIfFinished(this.board).subscribe( res => {
        this.isWinner = res.isWinner;
        this.winner = res.winner;
        this.actions = res.actions;
    });
  }

  ngOnInit() {
    for (let index = 0; index < 9; index++) {
      this.board.push(new CellData(Math.floor((index / 3)), index % 3, PlaceMode.None));
    }
  }
  
}

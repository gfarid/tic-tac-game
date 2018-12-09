import { Injectable } from '@angular/core';
import { PlaceMode } from '../model/enums/placeMode';
import { Observable } from "rxjs";
import { of } from 'rxjs';
import { IclearBoard , IcheckBorad} from '../model/board-model';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  isWinner = false;
  winner;
  actions = 0;
  currentPlayer: PlaceMode = PlaceMode.Player1;
  diagonal1 = [0,4,8];
  diagonal2 = [2,4,6];
  matrixDimension = 3;
  minStepToWin = 5;
  constructor() { }

  checkIfFinished(board): Observable<IcheckBorad> {

    if (this.actions < this.minStepToWin ) {
      return of({ 
        isWinner:this.isWinner,
        winner: this.winner,
        actions: this.actions
      });
    }

    for (let row = 0; row < this.matrixDimension; row++) {
      if ( board[row * this.matrixDimension].place !== PlaceMode.None &&
          board[row * this.matrixDimension].place === board[row * this.matrixDimension + 1].place &&
          board[row * this.matrixDimension].place === board[row * this.matrixDimension + 2].place) {
            this.isWinner = true;
            this.winner = board[row * this.matrixDimension].place;
      }

      if (board[row].place !== PlaceMode.None && 
          board[row].place === board[row + this.matrixDimension ].place &&
          board[row + 2*this.matrixDimension].place === board[row].place) {
            this.isWinner = true;
            this.winner = board[row].place;
      }
    }

    if (board[this.diagonal1[0]].place !== PlaceMode.None &&
      board[this.diagonal1[0]].place === board[this.diagonal1[1]].place &&
      board[this.diagonal1[0]].place === board[this.diagonal1[2]].place) {
      this.isWinner = true;
      this.winner = board[this.diagonal1[0]].place;
    }

    if (board[this.diagonal2[0]].place !== PlaceMode.None &&
      board[this.diagonal2[0]].place === board[this.diagonal2[1]].place &&
      board[this.diagonal2[0]].place === board[this.diagonal2[2]].place) {
      this.isWinner = true;
      this.winner = board[this.diagonal2[0]].place;
    }

    return of({
          isWinner:this.isWinner,
          winner: this.winner,
          actions: this.actions
    });
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === PlaceMode.Player1 ? PlaceMode.Player2 : PlaceMode.Player1;
  }

  clearBoard(board): Observable<IclearBoard> {
    for (let index = 0; index < board.length; index++) {
      board[index].place = PlaceMode.None;
    }
    this.actions = 0;
    this.currentPlayer = PlaceMode.Player1;
    this.isWinner = false;
    return of({
      isWinner:this.isWinner,
      actions:this.actions
    });
  }
}

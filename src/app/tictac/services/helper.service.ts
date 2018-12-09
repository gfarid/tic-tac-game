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

  constructor() { }

  checkIfFinished(board): Observable<IcheckBorad> {

    if (this.actions < 5) {
      return of({ 
        isWinner:this.isWinner,
        winner: this.winner,
        actions: this.actions
      });
    }

    for (let row = 0; row < 3; row++) {
      if ( board[row * 3].place !== PlaceMode.None &&
          board[row * 3].place === board[row * 3 + 1].place &&
          board[row * 3 ].place === board[row * 3 + 2].place) {
            this.isWinner = true;
            this.winner = board[row * 3].place;
      }

      if (board[row].place !== PlaceMode.None && 
          board[row].place === board[row + 3].place &&
          board[row + 6].place === board[row].place) {
            this.isWinner = true;
            this.winner = board[row].place;
      }
    }

    if (board[0].place !== PlaceMode.None &&
      board[0].place === board[4].place &&
      board[0].place === board[8].place) {
      this.isWinner = true;
      this.winner = board[0].place;
    }

    if (board[2].place !== PlaceMode.None &&
      board[2].place === board[4].place &&
      board[2].place === board[6].place) {
      this.isWinner = true;
      this.winner = board[2].place;
    }

    return of({
          isWinner:this.isWinner,
          winner: this.winner,
          actions: this.actions
    });
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
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

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CellData } from '../model/board-model';
import { PlaceMode } from '../model/enums/placeMode';

@Component({
  selector: 'app-tic-tac-cell',
  templateUrl: './tic-tac-cell.component.html',
  styleUrls: ['./tic-tac-cell.component.scss']
})
export class TicTacCellComponent {

  @Input('value')
  cellData: CellData;
  
  @Output('onCellClick')
  onCellClick : EventEmitter<CellData> = new EventEmitter<CellData>();

  cellClick(){
    if(this.cellData.place == PlaceMode.None){
      this.onCellClick.emit(this.cellData);
    }
  }

}

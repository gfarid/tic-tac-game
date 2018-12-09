import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacRootComponent } from './tic-tac-root/tic-tac-root.component';
import { TicTicBoradComponent } from './tic-tic-borad/tic-tic-borad.component';
import { TicTacCellComponent } from './tic-tac-cell/tic-tac-cell.component';
import { TicTacHeaderComponent } from './tic-tac-header/tic-tac-header.component';
import { HelperService } from './services/helper.service';

@NgModule({
  declarations: [TicTacRootComponent, TicTicBoradComponent, TicTacCellComponent, TicTacHeaderComponent],
  imports: [
    CommonModule
  ],
  providers: [HelperService],
  exports:[TicTacRootComponent]
})
export class TictacModule { }

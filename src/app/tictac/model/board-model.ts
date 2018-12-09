
import { PlaceMode } from "./enums/placeMode";

export class CellData {
    constructor(
        public row : any,
        public column : number,
        public place: PlaceMode ){    
    }
}

export interface IcheckBorad {
    isWinner: boolean,
    winner: number,
    actions: number
}
  
export interface IclearBoard {
    isWinner: boolean,
    actions: number
}
  
import { DirectionValue } from './enum';

export class Position {

  constructor(x, y, maxX, maxY) {
    this.x = x;
    this.y = y;
    this.maxX = maxX;
    this.maxY = maxY;

    if(!this.IsValid()){
      throw "Input is not valid";
    }
  }

  IsValid() {
    return this.x >= 0 && this.y >= 0 && this.x <= this.maxX && this.y <= this.maxY;
  }

  Move(directionValue) {
    let originalX = this.x;
    let originalY = this.y;
    switch (directionValue) {
      case DirectionValue.EAST:
        this.x++;
        break;
      case DirectionValue.SOUTH:
        this.y--;
        break;
      case DirectionValue.WEST:
        this.x--;
        break;
      case DirectionValue.NORTH:
        this.y++;
        break;
      default:
        throw "Value of direction is not valid";
    }

    if (this.IsValid()) return;

    this.x = originalX;
    this.y = originalY;
  }
}
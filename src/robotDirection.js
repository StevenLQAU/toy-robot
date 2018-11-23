import { DirectionString, DirectionValue, TurnDirection } from './enum'

export class RobotDirection {

  static GetDirection(directionString) {
    switch (directionString) {
      case DirectionString.EAST:
        return DirectionValue.EAST;
      case DirectionString.SOUTH:
        return DirectionValue.SOUTH;
      case DirectionString.WEST:
        return DirectionValue.WEST;
      case DirectionString.NORTH:
        return DirectionValue.NORTH;
      default:
        throw "Direction string is not valid";
    }
  }

  constructor(direction) {
    this.currentDirection = direction;
  }

  Turn(turn) {
    let newDirection;
    switch (turn) {
      case TurnDirection.LEFT:
        newDirection = this.currentDirection >> 1;
        if (newDirection == 0) {
          newDirection = DirectionValue.NORTH;
        }
        break;
      case TurnDirection.RIGHT:
        newDirection = this.currentDirection << 1;
        if (newDirection > DirectionValue.NORTH)
        {
          newDirection = DirectionValue.EAST;
        }

        break;
      default:
        throw "Turn direction is not valid";
    }
    this.currentDirection = newDirection;
  }

  GetString() {
    switch (this.currentDirection) {
      case DirectionValue.EAST:
        return DirectionString.EAST;
      case DirectionValue.SOUTH:
        return DirectionString.SOUTH;
      case DirectionValue.WEST:
        return DirectionString.WEST;
      case DirectionValue.NORTH:
        return DirectionString.NORTH;
      default:
        throw "Wrong direction value";
    }
  }
}
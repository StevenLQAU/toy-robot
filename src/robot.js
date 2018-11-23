import { Position } from '../src/position';
import { TurnDirection } from '../src/enum';
import { RobotDirection} from '../src/robotDirection';

export class Robot {

  constructor(x, y, maxX, maxY, direction) {
    this.position = new Position(x, y, maxX, maxY);
    this.direction = new RobotDirection(direction);
  }

  Move() {
    this.position.Move(this.direction.currentDirection);
  }

  TurnLeft() {
    this.direction.Turn(TurnDirection.LEFT);
  }

  TurnRight() {
    this.direction.Turn(TurnDirection.RIGHT);
  }

  Report() {
    return this.position.x + ',' + this.position.y + ',' + this.direction.GetString();
  }
}
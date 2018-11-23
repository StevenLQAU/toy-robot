import { Position } from './position';
import { TurnDirection } from './enum';
import { RobotDirection} from './robotDirection';

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
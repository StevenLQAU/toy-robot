import { equal } from 'assert'
import { DirectionValue, DirectionString, TurnDirection } from '../src/enum';
import { RobotDirection } from '../src/robotDirection';

describe("RobotDirection", () => {
  it("Can get direction value from string", () => {
    let directionValue = RobotDirection.GetDirection(DirectionString.EAST);
    equal(directionValue, DirectionValue.EAST);
  })

  it("Can get direction string from current direction", () => {
    const direction = new RobotDirection(DirectionValue.NORTH)
    equal(direction.GetString(), DirectionString.NORTH);
  })

  it("Can turn to correct direction", () => {
    const direction = new RobotDirection(DirectionValue.NORTH);
    equal(direction.GetString(), DirectionString.NORTH);

    direction.Turn(TurnDirection.LEFT);
    equal(direction.GetString(), DirectionString.WEST);

    direction.Turn(TurnDirection.LEFT);
    equal(direction.GetString(), DirectionString.SOUTH);

    direction.Turn(TurnDirection.LEFT);
    equal(direction.GetString(), DirectionString.EAST);

    direction.Turn(TurnDirection.LEFT);
    equal(direction.GetString(), DirectionString.NORTH);

    direction.Turn(TurnDirection.RIGHT);
    equal(direction.GetString(), DirectionString.EAST);

    direction.Turn(TurnDirection.RIGHT);
    equal(direction.GetString(), DirectionString.SOUTH);

    direction.Turn(TurnDirection.RIGHT);
    equal(direction.GetString(), DirectionString.WEST);

    direction.Turn(TurnDirection.RIGHT);
    equal(direction.GetString(), DirectionString.NORTH);

  })
})
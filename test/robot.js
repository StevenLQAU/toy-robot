import { Robot } from '../src/robot';
import { RobotDirection } from '../src/robotDirection';
import { DirectionValue } from '../src/enum';
import assert from 'assert';

describe("Robot", () => {
    it("can be initialized", () => {
        let robot = new Robot(1, 1, 5, 5, DirectionValue.EAST)
        assert.equal(1, robot.position.x);
    })

    it("cannot be initialized", () => {
        assert.throws(() => { new Robot(-1, 1, 5, 5, DirectionValue.EAST)});
    })

    it("can turn left", () => {
        let robot = new Robot(1, 1, 5, 5, DirectionValue.EAST);
        robot.TurnLeft();
        assert.equal(DirectionValue.NORTH, robot.direction.currentDirection);
    })

    it("can turn right", () => {
        let robot = new Robot(1, 1, 5, 5, DirectionValue.EAST);
        robot.TurnRight();
        assert.equal(DirectionValue.SOUTH, robot.direction.currentDirection);
    })

    it("can move", () => {
        let robot = new Robot(1, 1, 5, 5, DirectionValue.EAST);
        robot.Move();
        assert.equal(2, robot.position.x);
        assert.equal(1, robot.position.y);
    })

    it("can stop moving", () => {
        let robot = new Robot(0, 0, 5, 5, DirectionValue.SOUTH);
        robot.Move();
        assert.equal(0, robot.position.x);
        assert.equal(0, robot.position.y);
    })

    it("can report position", ()=>{
        let robot = new Robot(1, 2, 5, 5, DirectionValue.SOUTH);
        assert.equal(robot.Report(), "1,2,SOUTH");
    })
})
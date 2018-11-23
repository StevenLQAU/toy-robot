import { Position } from '../src/position';
import assert from 'assert';
import { DirectionValue } from '../src/enum';

describe("Position", () => {
    it("Can initialize position and max value", () => {
        const position = new Position(1, 2, 3, 4);
        assert.equal(position.x, 1);
        assert.equal(position.y, 2);

        assert.equal(position.maxX, 3);
        assert.equal(position.maxY, 4);
    })

    it("Can check the position is valid or not", () => {      
        assert.throws(() => { new Position(-1, 2, 3, 4); });
        assert.throws(() => { new Position(1, -1, 3, 4) });
        assert.throws(() => { new Position(4, 2, 3, 4) });
        assert.throws(() => { new Position(1, 5, 3, 4) });
    })

    it("Can move", () =>{
        const position = new Position(0, 0, 4, 4);
        position.Move(DirectionValue.NORTH);
        assert.equal(1, position.y);
        position.Move(DirectionValue.EAST);
        assert.equal(1, position.x);
    })

    it("Can prevent move", () =>{
        let position = new Position(0, 0, 4, 4);
        position.Move(DirectionValue.SOUTH);
        assert.equal(0, position.y);
        position.Move(DirectionValue.WEST);
        assert.equal(0, position.x);

        position = new Position(4,4,4,4);
        position.Move(DirectionValue.NORTH);
        assert.equal(4, position.y);
        position.Move(DirectionValue.EAST);
        assert.equal(4, position.x);
    })
})
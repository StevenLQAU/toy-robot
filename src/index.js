import { createInterface } from 'readline';
import { Robot } from './robot';
import { RobotDirection } from './robotDirection';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const maxX = 5;
const maxY = 5;

let robot = undefined;

rl.on('line', (line) => {
    try {
        switch (line.split(' ')[0]) {
            case 'PLACE':
                const params = line.split(' ')[1].split(',');
                robot = new Robot(+params[0], +params[1], maxX, maxY, RobotDirection.GetDirection(params[2]));
                break;
            case 'MOVE':
                if (!!robot) {
                    robot.Move();
                }
                break;
            case 'LEFT':
                if (!!robot) {
                    robot.TurnLeft();
                }
                break;
            case 'RIGHT':
                if (!!robot) {
                    robot.TurnRight();
                }
                break;
            case 'REPORT':
                if (!!robot) {
                    console.log(robot.Report());
                }              
                break;
            case 'close':
                rl.close();
                break;
            default:
                console.log('Wrong command');
                break;
        }
    }
    catch (err) {

    }
});
rl.on('close', function () {
    console.log('bye bye');
    process.exit(0);
});

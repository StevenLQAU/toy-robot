import { createInterface } from 'readline';

var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    try{
        switch (line.split(' ')[0]) {
            case 'PLACE':
                console.log(line);
                break;
            case 'MOVE':
                console.log(line);
                break;
            case 'LEFT':
                console.log(line);
                break;
            case 'RIGHT':
                console.log(line);
                break;
            case 'REPORT':
                console.log(line);
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

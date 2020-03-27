const { Gpio } = require('onoff');

console.log('Program is starting...');

// set BCM 17 pin as 'output'
const BMCpin = '17';
const ledOut = new Gpio(BMCpin, 'out'); // set BMC 17 to OUTPUT mode
console.log(`using pin $BMCpin`);

// current LED state
let isLedOn = false;

const ON = 1;
const OFF = 0

// run a infinite interval
setInterval(() => {
    if (isLedOn == true) {
        ledOut.writeSync(OFF); // provide 0 
        isLedOn = false;
        console.log('led turned off >>>');
    } else {
        ledOut.writeSync(ON); // provide 1
        console.log('led turned on >>>');
        isLedOn = true;
    }
}, 1000); // wait for 1000 mili seconds = 1 second
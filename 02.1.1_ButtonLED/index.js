const { Gpio } = require('onoff');

console.log('Program is starting...');

const ledPin = '17';    // define the led Pin
const buttonPin = '18'; // define the button Pin

const ledOut = new Gpio(ledPin, 'out');     // set BMC 17 to OUTPUT mode
const buttonIn = new Gpio(buttonPin, 'in'); // set BMC 18 to INPUT mode

const ON = 1;
const OFF = 0

// listen for pin voltage change
buttonIn.watch((err, value) => {
  if (err) {
    console.log('Error', err);
  }

  // log pin value (0 or 1)
  if (value === ON) {
    ledOut.writeSync(ON);
    console.log('Button is pressed, led turned on >>>');
  } else {
    ledOut.writeSync(OFF);
    console.log('Button is released, led turned off >>>');
  }
});
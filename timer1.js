
//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
/*This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds */
// Edge cases
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

const Args = process.argv.slice(2);


Args.forEach((time) => {
  if (time !== isNaN && time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
});

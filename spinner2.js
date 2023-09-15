//spinner2.js

/**
 * spinner Writes a spinner to the console with stdout.
 * @param {number} timer Is the number of milliseconds that spinner will rotation.
 */
const spinner = function(timer) {
  // The variables for spin.
  const spinArray = ['|', '/', '-', '\\'];
  let rotation = 0;

  // spin updates it's position.
  const spin = () => {
    process.stdout.write(`\r${spinArray[rotation % 4]}     `);
    rotation += 1;
  };

  // To finish with no artifacts.
  const finish = () => {
    process.stdout.write('\r \n');
  };

  // start spinning
  const interval = setInterval(() => {
    // rotating
    spin();
    // if timer is up
    if (timer <= 0) {
      // clear interval and finish
      clearInterval(interval);
      finish();
    }
    // the timer updates each interval
    timer -= 100;
    // interval is set to 100ms
  }, 100);

};

// Usage:
// spinner(2000); // Spin for 2 seconds (2000 milliseconds)

module.exports = spinner;

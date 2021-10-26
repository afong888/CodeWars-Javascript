// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
  // Returns time formatted to a string and to have two digits
  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  }
  if (seconds < 60) {
    // Format seconds
    return '00:00:' + formatTime(seconds);
  } else if (seconds < 3600) {
    // Format minutes
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return '00:' + formatTime(minutes) + ':' + formatTime(secs);
  } else {
    // Format hours
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = seconds % 60;
    return formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(secs);
  }
}
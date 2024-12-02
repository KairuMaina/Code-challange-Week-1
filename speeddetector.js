function speedDetector(speed) {
    const speedLimit = 70; // Speed limit
    const kmPerDemerit = 5; // Demerit point for every 5 km/s over the speed limit
  
    if (speed < speedLimit) {
      return "Ok";
    } else {
      const excessSpeed = speed - speedLimit;
      const points = Math.floor(excessSpeed / kmPerDemerit);
  
      if (points > 12) {
        return "License suspended";
      } else {
        return `Points: ${points}`;
      }
    }
  }
  
  // Example usage:
  console.log(speedDetector(80)); // Expected output: "Points: 2"
  console.log(speedDetector(50)); // Expected output: "Ok"
  console.log(speedDetector(130)); // Expected output: "License suspended"
  
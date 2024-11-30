function gradeGenerator() {
  // Prompt the user for their marks
  let marks = prompt("Enter your marks (0 to 100):");

  // Convert marks to a number
  marks = Number(marks);

  // Check if the input is a valid number and within the range of 0 to 100
  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
  } else {
    // Determine the grade based on marks
    if (marks > 79) {
      console.log("Grade: A");
    } else if (marks >= 60) {
      console.log("Grade: B");
    } else if (marks >= 50) {
      console.log("Grade: C");
    } else if (marks >= 40) {
      console.log("Grade: D");
    } else {
      console.log("Grade: E");
    }
  }
}

// Call the function to prompt user and display the grade
gradeGenerator();

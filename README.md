
README
Toy Problems Solutions

This repository contains solutions to three programming challenges designed to test foundational problem-solving skills in JavaScript. Each solution is implemented as a standalone program and includes functions that can be tested and reused.

README
Toy Problems Solutions

This repository contains solutions to three programming challenges designed to test foundational problem-solving skills in JavaScript. Each solution is implemented as a standalone program and includes functions that can be tested and reused.
Table of Contents

    Programs Overview
        Challenge 1: Student Grade Generator
        Challenge 2: Speed Detector
        Challenge 3: Net Salary Calculator
    Getting Started
    Usage
    Testing
    Contributing
    License

Programs Overview
Challenge 1: Student Grade Generator

This program calculates a student's grade based on their marks:

    Input: A number between 0 and 100.
    Output: Corresponding grade:
        A for marks > 79
        B for marks between 60 and 79
        C for marks between 50 and 59
        D for marks between 40 and 49
        E for marks below 40.


Challenge 2: Speed Detector

This program checks the speed of a vehicle and calculates demerit points:

    Input: Speed of the vehicle (in km/h).
    Output:
        Prints "Ok" if speed is <= 70.
        Prints the number of demerit points for speeds above 70, with 1 point for every 5 km/h over the limit.
        Suspends the driver's license if points > 12.
        \

Example:
checkSpeed(80); // Output: "Points: 2"
checkSpeed(130); // Output: "Points: 12"
checkSpeed(140); // Output: "License suspended"


Challenge 3: Net Salary Calculator

This program calculates an employee's net salary based on their basic salary and benefits:

    Inputs:
        Basic Salary.
        Benefits.
    Outputs:
        Gross Salary, Payee (Tax), NHIF Deductions, NSSF Contributions, and Net Salary.

Example:

calculateNetSalary(50000, 10000);
// Output:
// Gross Salary: 60000
// PAYEE: 8200
// NHIF: 1300
// NSSF: 3600
// Net Salary: 46900


Prerequisites

    Node.js installed on your system.
    A text editor or IDE (e.g., VSCode).

Installation

    Clone this repository:

git clone https://github.com/KairuMaina/Code-challange-Week-1

Navigate to the project directory:

cd Code-challange-week-1

Run the scripts directly using Node.js:

    netsalary.js
    studentgrades.js
    speeddetector.js

Usage

Open the respective script file (netsalary.js studentgrades.js speeddetector.js).

    Modify the input values in the code or prompt the user to input values interactively.
    Run the script to view the output.

Testing
Manual Testing

    Update the function calls in the script files with test cases provided in the comments.

Automated Testing

    Use a testing framework like Jest to write unit tests for each function.
    Sample Jest test:

    test('Calculates correct grade', () => {
      expect(getStudentGrade(85)).toBe("A");
      expect(getStudentGrade(45)).toBe("D");
    });

Contributing

Contributions are welcome! If you'd like to improve or expand on these programs:

    Fork the repository.
    Create a new branch:

git checkout -b feature/your-feature-name

Make your changes and commit:

git commit -m "Add your message here"

Push your branch:

    git push origin feature/your-feature-name

    Submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
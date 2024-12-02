// Function to calculate Payee Tax based on updated KRA tax bands
function calculatePayeeTax(grossSalary) {
  let annualSalary = grossSalary * 12;  // Convert to annual salary

  let tax = 0;

  if (annualSalary <= 288000) {
      tax = annualSalary * 0.10; // 10% tax for salary up to 288,000 Ksh annually
  } else if (annualSalary <= 388000) {
      tax = 28800 + (annualSalary - 288000) * 0.25; // 25% tax for salary between 288,001 and 388,000 Ksh annually
  } else if (annualSalary <= 6000000) {
      tax = 58800 + (annualSalary - 388000) * 0.30; // 30% tax for salary between 388,001 and 6,000,000 Ksh annually
  } else if (annualSalary <= 9600000) {
      tax = 1718000 + (annualSalary - 6000000) * 0.325; // 32.5% tax for salary between 6,000,001 and 9,600,000 Ksh annually
  } else {
      tax = 3130000 + (annualSalary - 9600000) * 0.35; // 35% tax for salary above 9,600,000 Ksh annually
  }

  // Convert tax back to monthly tax by dividing by 12
  return tax / 12;
}

// Function to calculate NHIF Deduction based on the gross salary
function calculateNHIF(grossSalary) {
  if (grossSalary <= 5999) return 150;
  if (grossSalary <= 7999) return 300;
  if (grossSalary <= 11999) return 400;
  if (grossSalary <= 14999) return 500;
  if (grossSalary <= 19999) return 600;
  if (grossSalary <= 24999) return 750;
  if (grossSalary <= 29999) return 850;
  if (grossSalary <= 34999) return 900;
  if (grossSalary <= 39999) return 950;
  if (grossSalary <= 44999) return 1000;
  if (grossSalary <= 49999) return 1100;
  if (grossSalary <= 59999) return 1200;
  if (grossSalary <= 69999) return 1300;
  if (grossSalary <= 79999) return 1400;
  if (grossSalary <= 89999) return 1500;
  if (grossSalary <= 99999) return 1600;
  return 1700; // For salaries above 100,000
}

// Function to calculate NSSF Deduction (currently fixed at 6% employee contribution)
function calculateNSSF(grossSalary) {
  const contributionRate = 0.06; // 6%
  return grossSalary * contributionRate;
}

// Function to calculate the Net Salary
function calculateNetSalary(basicSalary, benefits) {
  // Gross Salary = Basic Salary + Benefits
  const grossSalary = basicSalary + benefits;
  
  // Calculate the deductions
  const payeeTax = calculatePayeeTax(grossSalary);
  const nhifDeduction = calculateNHIF(grossSalary);
  const nssfDeduction = calculateNSSF(grossSalary);
  
  // Net Salary = Gross Salary - Tax - NHIF - NSSF
  const netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
  
  return {
      grossSalary,
      payeeTax,
      nhifDeduction,
      nssfDeduction,
      netSalary
  };
}

// Example usage
const basicSalary = 35000; // Input basic salary
const benefits = 5000;     // Input benefits

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: KSh " + salaryDetails.grossSalary);
console.log("Payee Tax (Tax): KSh " + salaryDetails.payeeTax);
console.log("NHIF Deduction: KSh " + salaryDetails.nhifDeduction);
console.log("NSSF Deduction: KSh " + salaryDetails.nssfDeduction);
console.log("Net Salary: KSh " + salaryDetails.netSalary);

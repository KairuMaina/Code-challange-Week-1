function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYEE (Tax)
    const payee = calculatePAYEE(grossSalary);
  
    // Calculate NSSF Deductions
    const nssf = calculateNSSF(grossSalary);
  
    // Calculate NHIF/SHIF Contributions
    const nhif = calculateNHIF(grossSalary);
  
    // Total Deductions
    const totalDeductions = payee + nssf + nhif;
  
    // Net Salary
    const netSalary = grossSalary - totalDeductions;
  
    return {
      grossSalary,
      payee,
      nssf,
      nhif,
      netSalary
    };
  }
  
  // PAYEE (Tax) Calculation
  function calculatePAYEE(grossSalary) {
    let payee = 0;
  
    if (grossSalary <= 24000) {
      payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
      payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
    } else {
      payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
    }
  
    return payee;
  }
  
  // NSSF Contribution Calculation
  function calculateNSSF(grossSalary) {
    const tier1Limit = 7000;
    const tier2Limit = 36000;
  
    const tier1 = Math.min(grossSalary, tier1Limit) * 0.06;
    const tier2 = grossSalary > tier1Limit ? Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit) * 0.06 : 0;
  
    return tier1 + tier2;
  }
  
  // NHIF/SHIF Contribution Calculation
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
    return 1700;
  }
  
  // Example Usage
  const result = calculateNetSalary(50000, 10000);
  console.log("Gross Salary:", result.grossSalary);
  console.log("PAYEE:", result.payee);
  console.log("NSSF:", result.nssf);
  console.log("NHIF:", result.nhif);
  console.log("Net Salary:", result.netSalary);
  
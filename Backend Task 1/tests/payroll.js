function payroll(regularHours, overtimeHours, hourlyRate) {
  if (
    typeof regularHours !== 'number' ||
    typeof overtimeHours !== 'number' ||
    typeof hourlyRate !== 'number' ||
    regularHours < 0 ||
    overtimeHours < 0 ||
    hourlyRate <= 0
  ) {
    throw new Error('Invalid input');
  }

  const totalHours = regularHours + overtimeHours;
  let totalPay = 0;

  if (totalHours > 40) {
    const overtime = totalHours - 40;
    totalPay = 40 * hourlyRate + overtime * 1.5 * hourlyRate;
  } else {
    totalPay = totalHours * hourlyRate;
  }

  return totalPay;
}

module.exports = payroll;

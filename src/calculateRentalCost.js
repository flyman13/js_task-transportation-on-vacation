/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const OneDayPay = 40;

  if (days >= 7) {
    return days * OneDayPay - 50;
  }

  if (days >= 3) {
    return days * OneDayPay - 20;
  }

  return days * OneDayPay;
}

module.exports = calculateRentalCost;

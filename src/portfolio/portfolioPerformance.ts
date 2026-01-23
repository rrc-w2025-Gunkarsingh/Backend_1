export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}
// Function to calculate portfolio performance
export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {

  const profitOrLoss = currentValue - initialInvestment;
  const percentageChange = (profitOrLoss / initialInvestment) * 100;

// Determine performance summary based on percentage change
  const performanceSummary =
    percentageChange >= 30
      ? "Excellent performance! Your investments are doing great."
      : percentageChange > 0
      ? "Modest gain. Your portfolio is growing slowly."
      : percentageChange === 0
      ? "No change. Your portfolio is holding steady."
      : percentageChange > -10
      ? "Minor loss. Stay calm and review your options."
      : "Significant loss. Review your portfolio strategy.";
      
// Return the performance metrics
  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}


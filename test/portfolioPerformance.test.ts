import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";
/**
 * Test suite for the calculatePortfolioPerformance function.
 */
describe("calculatePortfolioPerformance", () => {

    it("should return excellent performance for gains >= 30%", () => {
        const result = calculatePortfolioPerformance(10000, 16000);
        expect(result.performanceSummary).toBe(
            "Excellent performance! Your investments are doing great."
        );
    });

    it("should return modest gain for gains between 0 and 30%", () => {
        const result = calculatePortfolioPerformance(10000, 11000);
        expect(result.performanceSummary).toBe(
            "Modest gain. Your portfolio is growing slowly."
        );
    });
    it("should return no change for 0% change", () => {
        const result = calculatePortfolioPerformance(10000, 10000);
        expect(result.performanceSummary).toBe(
            "No change. Your portfolio is holding steady."
        );
    });
    it("should return significant loss for losses <= -10%", () => {
        const result = calculatePortfolioPerformance(10000, 8999.9);
        expect(result.performanceSummary).toBe(
            "Significant loss. Review your portfolio strategy."
        );
    });

});

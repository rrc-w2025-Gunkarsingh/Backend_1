import { Router, Request, Response } from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

const router = Router();

/**
 * Returns portfolio performance using initial and current values.
 * @param req - Request with investment values
 * @param res - Response with calculated result
 */

router.get("/portfolio/performance", (req: Request, res: Response) => {
    const initialInvestment = Number(req.query.initialInvestment);
    const currentValue = Number(req.query.currentValue);
    
    if (isNaN(initialInvestment) || isNaN(currentValue)) {
        return res.status(400).json({ error: "Invalid input parameters." });
    }
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.status(200).json(result);
    

});

export default router;

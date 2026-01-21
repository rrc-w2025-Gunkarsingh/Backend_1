import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";
import portfolioRoutes from "./api/v1/routes/portfolioRoutes";

const app: Express = express();
 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
 
app.use("/api/v1", healthRoutes);
app.use("/api/v1", portfolioRoutes);
 
export default app;
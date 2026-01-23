import request from "supertest";
import express from "express";
import healthRouter from "../src/api/v1/routes/healthRoutes";
const app = express();
app.use("/", healthRouter);

describe("GET /health", () => {
    it("should return health status", async () => {
        const res = await request(app).get("/health");

        expect(res.status).toBe(200);
        expect(res.body.status).toBe("OK");
        expect(res.body).toHaveProperty("uptime");
        expect(res.body).toHaveProperty("timestamp");
        expect(res.body.version).toBe("1.0.0");
    });
});

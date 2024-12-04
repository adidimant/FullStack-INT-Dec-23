import rateLimit from "express-rate-limit";
// import { MiddleWareType } from "./types";
const rateLimits = {
    "1000": 10,
    "2000": 15,
    "5000": 20,
    "10000": 35,
    "30000": 46,
    "60000": 58,
    "300000": 130,
};
const rateLimitOptions = Object.keys(rateLimits).map((interval) => ({
    windowMs: parseInt(interval, 10),
    max: rateLimits[interval],
}));
export const rateLimitMiddleware = rateLimit({ keyGenerator: (req) => req.ip, ...rateLimitOptions });

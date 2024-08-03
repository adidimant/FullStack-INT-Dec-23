
import rateLimit from "express-rate-limit";
import { MiddleWareType } from './types';

const rateLimits: { [key: string]: number } = {
  "1000": 140,
  "2000": 280,
  "5000": 500,
  "10000": 1000,
  "30000": 2500,
  "60000": 4500,
  "300000": 9000,
};

const rateLimitOptions = Object.keys(rateLimits).map((interval) => ({
  windowMs: parseInt(interval, 10),
  max: rateLimits[interval],
}));

export const rateLimitMiddleware: MiddleWareType = rateLimit({ keyGenerator: (req) => req.ip as string, ...rateLimitOptions });
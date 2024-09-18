import rateLimit from "express-rate-limit";
// Define the rate limits for different time intervals
const rateLimits = {
    "1000": 10,
    "2000": 15,
    "5000": 20,
    "10000": 35,
    "30000": 46,
    "60000": 58,
    "300000": 130,
};
// Select a specific interval you want to use (example: 1000ms)
const selectedInterval = "60000"; // Use your logic to select the interval dynamically if needed
// Create rate limiting options based on the selected interval
const rateLimitOptions = {
    windowMs: parseInt(selectedInterval, 10), // Convert string to number for the window size
    max: rateLimits[selectedInterval], // Set the max number of requests allowed
};
// Create the rate-limiting middleware
export const rateLimitMiddleware = rateLimit({
    keyGenerator: (req) => req.ip || 'unknown-ip', // Ensure a string is always returned
    ...rateLimitOptions, // Spread the rate limit options
});

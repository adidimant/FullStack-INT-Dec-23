const rateLimitMap = new Map();

const RATE_LIMIT_RULES = { 
    1: 5, 
    5: 8, 
    10: 12, 
    20: 15, 
    30: 18, 
    60: 20, 
    1800: 150, 
    3600: 300 
};

function rateLimiter(req, res, next) {
    const ip = req.ip;
    const userAgent = req.headers['user-agent'];
    const key = `${ip}-${userAgent}`;
    const currentTime = Date.now();

    if (!rateLimitMap.has(key)) {
        rateLimitMap.set(key, []);
    }

    const requestTimes = rateLimitMap.get(key);

    for (const windowSeconds in RATE_LIMIT_RULES) {
        const windowMs = windowSeconds * 1000;
        const maxRequests = RATE_LIMIT_RULES[windowSeconds];

        const recentRequests = requestTimes.filter(time => currentTime - time < windowMs);

        rateLimitMap.set(key, recentRequests);

        if (recentRequests.length >= maxRequests) {
            return res.status(429).json({ message: 'Too many requests!' });
        }
    }

    requestTimes.push(currentTime);
    next();
}

module.exports = rateLimiter;
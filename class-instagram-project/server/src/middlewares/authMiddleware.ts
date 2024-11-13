import jwt from 'jsonwebtoken';
import express from 'express';
import { ACTIVE_USERS_SESSIONS_AND_TOKENS } from '../services/sessions.management.service';

export const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authorizationHeader = req.headers.authorization; // 'Bearer <Access-Token>'
  if (typeof authorizationHeader == 'string') {
    const accessToken = authorizationHeader.split(' ')?.[1];
    if (accessToken) {
      try {
        const userData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string);
        if (typeof userData == 'object') {
          const session = ACTIVE_USERS_SESSIONS_AND_TOKENS[userData.userId];
          if (session) {
            (req as any).userData = userData;
            session.lastActivity = Date.now();
            next();
            return;
          }
        }
      } catch (err) {}
    }
  }
  
  res.status(401).send('Unauthorized! please log in or renew access!');
};
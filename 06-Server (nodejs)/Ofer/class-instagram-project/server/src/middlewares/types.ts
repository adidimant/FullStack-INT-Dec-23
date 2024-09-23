import express from 'express';

export type MiddleWareType = (req: express.Request, res: express.Response, next: express.NextFunction) => void;
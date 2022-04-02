import express, { NextFunction, Request, Response } from 'express';

const app = express();
const router = express.Router();

router.get('/bitbank/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello');
});

export { router };
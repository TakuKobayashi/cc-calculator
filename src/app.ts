import serverlessExpress from '@vendia/serverless-express';
import express from 'express';
import bodyParser from 'body-parser';
import * as sourceMapSupport from 'source-map-support';

import { router } from './platforms/bitbank';

sourceMapSupport.install();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/platforms', router);

app.get('/test', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from root!',
  });
});

export const handler = serverlessExpress({ app });

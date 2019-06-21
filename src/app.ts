import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app
  .use(morgan('combined'))
  .use(cors())
  .use(compression())
  .use(bodyParser.json());

export default app;

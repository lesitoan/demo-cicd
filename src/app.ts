import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

const origins = [
  'http://localhost:3002',
  'http://localhost:3002/',
  'http://localhost:3001/',
  'http://localhost:3001',
  'http://localhost:3000',
  'http://localhost:3000/',
];
const corsOption = {
  origin: origins,
  credentials: true,
  exposedHeaders: ['Retry-After', 'Ratelimit-Remaining'],
};

// app.use(
//   cors({
//     ...corsOption,
//     origin(requestOrigin, callback) {
//       const result =
//         (typeof requestOrigin === 'string' && origins.indexOf(requestOrigin) !== -1) ||
//         (requestOrigin && config.corsOrigin && requestOrigin.match(new RegExp(config.corsOrigin)));
//       callback(null, result);
//     },
//   })
// );

export default app;

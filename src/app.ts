import express from 'express';
import 'express-async-errors';
import routers from './routers';
// import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use(routers);

// app.use(errorMiddleware);

export default app;

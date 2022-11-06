import express from 'express';
import LoginController from '../controllers/loginController';

const loginsRouter = express.Router();

const controller = new LoginController();

loginsRouter.post('/', controller.insert);

export default loginsRouter;
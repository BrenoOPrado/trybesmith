import express from 'express';
import UserController from '../controllers/userController';

const usersRouter = express.Router();

const controller = new UserController();

usersRouter.post('/', controller.insert);

export default usersRouter;
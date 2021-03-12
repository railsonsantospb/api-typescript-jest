import {Router} from 'express';
import {UserController} from './controllers/UserController';
import {SurveysController} from './controllers/SurveysController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

router.post('/users', userController.create);
router.post('/survey', surveysController.create);
router.get('/survey', surveysController.show);

export {router};
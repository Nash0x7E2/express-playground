import {Router} from 'express';
import {ApplicationController} from "../controller/application_controller";

export const applicationRouter: Router = Router();
const controller: ApplicationController = new ApplicationController();

applicationRouter.get('/', controller.handleDefaultRoute);


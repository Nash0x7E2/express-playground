import {Router} from "express";
import {ItemsController} from "../controller/items_controller";

export const itemsRouter: Router = Router();
const itemController: ItemsController = new ItemsController();

// `/` here would represent `/items`.
itemsRouter.get('/', itemController.getItems);
itemsRouter.post('/', itemController.createItem);
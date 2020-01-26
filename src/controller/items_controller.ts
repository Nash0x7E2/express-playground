import {Request, Response} from "express";

export class ItemsController {
    public getItems(req: Request, res: Response) {
        return res.status(200).send(
            `
                <h3> Welcome to /items endpoint </h3>
            `
        );
    }
}
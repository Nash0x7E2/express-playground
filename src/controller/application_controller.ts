import {Request, Response} from "express";

export class ApplicationController {
    public handleDefaultRoute(req: Request, res: Response) {
        return res.status(200).send(
            `
                <h3> Welcome to the playground! </h3> 
                Have a look around the code!
            `
        );
    }
}

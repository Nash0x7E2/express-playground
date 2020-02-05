import {Request, Response} from "express";
import {con} from "../database_config";
import {ConnectionPool} from "mssql";

export class ItemsController {
    public async getItems(req: Request, res: Response) {
        try {
            let connection: ConnectionPool = await con.connect();
            const result = await connection.query`select *
                                                  from listing.[default].items`;
            let parsedResults = JSON.stringify(result.recordset);
            console.log(parsedResults);
            await connection.close();
            return res.status(200).send(parsedResults);
        } catch (error) {
            return res.status(500).send(
                `
                <h3> Error ${error} </h3>
            `
            );
        }

    }

    public async createItem(req: Request, res: Response) {
        return res.status(200).send(
            `
                <h3> Welcome to /items endpoint </h3>
            `
        );
    }
}
import { Request, Response } from "express";
import { con } from "../database_config";
import { ConnectionPool, Request as MSRequest, VarChar } from "mssql";

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
        let data = req.body;
        console.log(data);
        try {
            let connection: ConnectionPool = await con.connect();
            let request: MSRequest = new MSRequest(connection);
            return request.input(`item`, VarChar, data.item).query("INSERT INTO listing.[default].items (item_name) VALUES (@item)",
                function (err) {
                    connection.close();
                    if (err == null) {
                        return res.status(200).send(`Added item "${data.item}". Call with get request to view`);
                    } else {
                        return res.status(500).send(`Error adding item ${err}`);
                    }
                });
        } catch (error) {
            return res.status(500).send(
                `
                <h3> Error ${error} </h3>
            `
            );
        }
    }
}
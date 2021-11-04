import express, { Express } from "express";
import { Helpers1 } from "./Helpers1";

export class Server {
    public app: Express | null = null;
    public port: number | null = null;

    constructor(port: number) {
        this.port = port;

        this.app = express();

        this.app.get("/names/:id", (req, res) => {
            const output = Helpers1.createCatCommand(req.params.id);
            res.send(output);
        });
    }

    start () {
        if (this.app !== null && this.port !== null) {
            this.app.listen(this.port, () => {
                console.log("Started application");
            });
        }
    }
}

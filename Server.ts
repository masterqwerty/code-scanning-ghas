import express, { Express } from "express";
import { Helpers1 } from "./Helpers1";
import { Helpers2 } from "./Helpers2";

export class Server {
    public app: Express | null = null;
    public port: number | null = null;

    constructor(port: number) {
        this.port = port;

        this.app = express();

        this.app.get("/names/:id", (req, res) => {
            const command = Helpers1.createCatCommand(req.params.id);
            const output = Helpers2.executeCommand(command);
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

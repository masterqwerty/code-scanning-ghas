import {Helpers2} from "./Helpers2";

export class Helpers1 {
    public static createCatCommand(filename: string): Promise<string> {
        const command = `http://localhost:8080/${filename}`;
        const output = Helpers2.executeCommand(command);
        return new Promise((resolve, reject) => {
            output.then(response => {
                resolve(response);
            })
        });
    }
}
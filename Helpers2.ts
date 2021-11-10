import { Helpers3 } from "./files/Helpers3";

export class Helpers2 {
    public static executeCommand(command: string): Promise<string> {
        return new Promise((resolve, reject) => {
            Helpers3.getOutput(command).then(response => {
                resolve(response);
            });
        });
    }
}

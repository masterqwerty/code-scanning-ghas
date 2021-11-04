import {Helpers2} from "./Helpers2";

export class Helpers1 {
    public static createCatCommand(filename: string): string {
        const command = `cat ${filename}.json`;
        const output = Helpers2.executeCommand(command);
        return output;
    }
}
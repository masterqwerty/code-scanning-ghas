import { Helpers3 } from "./files/Helpers3";

export class Helpers2 {
    public static executeCommand(command: string): string {
        return Helpers3.getOutput(command);
    }
}

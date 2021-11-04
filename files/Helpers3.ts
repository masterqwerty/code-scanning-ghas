import { execSync } from "child_process";

export class Helpers3 {
    public static getOutput(command: string): string {
        return execSync(command).toString('utf-8');
    }
}
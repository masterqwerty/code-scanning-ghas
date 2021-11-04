import { execSync } from "child_process"

export class Helpers2 {
    public static executeCommand(command: string): string {
        const output = execSync(command);
        return output.toString("utf-8");
    }
}

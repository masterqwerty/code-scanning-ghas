import http from "http";

export class Helpers3 {
    public static async getOutput(command: string): Promise<string> {
        return new Promise((resolve, reject) => {
            http.get(command, (res) => {
                let data: string = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    resolve(data);
                });
            }).on("error", (err) => {
                reject(err);
            })
        })
    }
}
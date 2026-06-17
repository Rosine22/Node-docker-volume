import { existsSync, mkdirSync, appendFileSync } from "fs";

const filePath = "./data/log.txt";

if (!existsSync("./data")) {
  mkdirSync("./data");
}

const message = `App started at ${new Date().toISOString()}\n`;

appendFileSync(filePath, message);

console.log("Data written:");
console.log(message);
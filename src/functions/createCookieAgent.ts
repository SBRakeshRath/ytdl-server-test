import ytdl from "@distube/ytdl-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(path.dirname(__filename));
const cookieAgent = ytdl.createAgent(
  JSON.parse(
    fs.readFileSync(path.join(__dirname, "./../../cookies.json"), "utf-8")
  )
);

export default cookieAgent;

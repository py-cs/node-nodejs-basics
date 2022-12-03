import path from "path";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { stdout } from "process";

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filename = path.resolve(__dirname, "files", "fileToRead.txt");

  createReadStream(filename).pipe(stdout);
};

await read();

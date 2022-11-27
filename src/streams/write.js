import path from "path";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { stdin } from "process";

const write = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filename = path.resolve(__dirname, "files", "fileToWrite.txt");
  const writable = createWriteStream(filename);

  stdin.pipe(writable);
};

await write();

import path from "node:path";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "files", "fileToRead.txt");
  const errorMessage = "FS operation failed";

  readFile(fileName, { encoding: "utf8" })
    .then(console.log)
    .catch(() => {
      throw new Error(errorMessage);
    });
};

await read();

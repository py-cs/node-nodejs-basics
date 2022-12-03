import path from "node:path";
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const list = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folder = path.resolve(__dirname, "files");
  const errorMessage = "FS operation failed";

  readdir(folder)
    .then(console.log)
    .catch(() => {
      throw new Error(errorMessage);
    });
};

await list();

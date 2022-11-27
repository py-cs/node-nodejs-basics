import path from "node:path";
import { rename as renameFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const rename = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const wrongFilename = path.resolve(__dirname, "files", "wrongFilename.txt");
  const properFilename = path.resolve(__dirname, "files", "properFilename.md");
  const errorMessage = "FS operation failed";

  renameFile(wrongFilename, properFilename).catch(() => {
    throw new Error(errorMessage);
  });
};

await rename();

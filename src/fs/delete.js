import path from "node:path";
import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const remove = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "files", "fileToRemove.txt");
  const errorMessage = "FS operation failed";

  rm(fileName).catch(() => {
    throw new Error(errorMessage);
  });
};

await remove();

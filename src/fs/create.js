import path from "node:path";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "files", "fresh.txt");
  const fileContent = "I am fresh and young";
  const errorMessage = "FS operation failed";

  writeFile(fileName, fileContent, { flag: "wx" }).catch(() => {
    throw new Error(errorMessage);
  });
};

await create();

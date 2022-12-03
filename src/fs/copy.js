import path from "node:path";
import { cp } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const srcFolder = path.resolve(__dirname, "files");
  const destFolder = path.resolve(__dirname, "files_copy");
  const errorMessage = "FS operation failed";

  cp(srcFolder, destFolder, {
    errorOnExist: true,
    force: false,
    recursive: true,
  }).catch(() => {
    throw new Error(errorMessage);
  });
};

copy();

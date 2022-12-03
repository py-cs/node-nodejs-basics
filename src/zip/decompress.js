import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";

const decompress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const srcFile = path.resolve(__dirname, "files", "archive.gz");
  const destFile = path.resolve(__dirname, "files", "fileToCompress.txt");

  const read = createReadStream(srcFile);
  const write = createWriteStream(destFile);
  const unzip = createGunzip();

  read.pipe(unzip).pipe(write);
};

await decompress();

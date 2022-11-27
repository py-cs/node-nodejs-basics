import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const compress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const srcFile = path.resolve(__dirname, "files", "fileToCompress.txt");
  const destFile = path.resolve(__dirname, "files", "archive.gz");

  const read = createReadStream(srcFile);
  const write = createWriteStream(destFile);
  const zip = createGzip();

  read.pipe(zip).pipe(write);
};

await compress();

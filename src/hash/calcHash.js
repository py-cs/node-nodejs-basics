import path from "path";
import { createHash } from "crypto";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filename = path.resolve(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );

  const sha256sum = createHash("sha256");
  const stream = createReadStream(filename);

  stream.on("data", function (chunk) {
    sha256sum.update(chunk);
  });
  stream.on("end", function () {
    console.log(sha256sum.digest("hex"));
  });
};

await calculateHash();

import { stdin, stdout } from "process";
import { Transform } from "stream";
import { EOL } from "os";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      callback(
        null,
        String(chunk).replace(EOL, "").split("").reverse().join("") + EOL
      );
    },
  });
  stdin.pipe(reverse).pipe(stdout);
};

await transform();

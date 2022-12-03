import path from "node:path";
import { fileURLToPath } from "node:url";
import { fork } from "child_process";

const TEST_ARGS = "--arg_one --arg_two";

const spawnChildProcess = async (args = []) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "files", "script.js");

  fork(fileName, args);
};

spawnChildProcess(TEST_ARGS.split(" "));

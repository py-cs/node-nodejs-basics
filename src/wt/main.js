import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const cores = os.cpus().length;
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "worker.js");
  const START_VALUE = 10;

  const workerPromises = Array(cores)
    .fill(null)
    .map(
      (_, i) =>
        new Promise((res, rej) => {
          const worker = new Worker(fileName, { workerData: START_VALUE + i });

          worker.on("error", () => rej());
          worker.on("message", (result) => res(result));
        })
    );

  const results = await Promise.allSettled(workerPromises);

  const transformedResults = results.map(({ status, value }) =>
    status === "fulfilled"
      ? { status: "resolved", value }
      : { status: "error", value: null }
  );

  console.log(transformedResults);
};

await performCalculations();

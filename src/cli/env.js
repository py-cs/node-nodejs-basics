const parseEnv = () => {
  const prefix = "RSS_";
  const vars = process.env;

  const varsWithPrefix = Object.entries(vars)
    .filter(([key]) => key.startsWith(prefix))
    .map((entry) => entry.join("="))
    .join("; ");
  console.log(varsWithPrefix);
};

parseEnv();

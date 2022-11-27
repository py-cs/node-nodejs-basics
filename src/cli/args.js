const parseArgs = () => {
  const args = process.argv.slice(2);

  const argsStr = args
    .reduce((acc, arg, index, arr) => {
      if (arg.startsWith("--")) {
        acc.push(`${arg.slice(2)} is ${arr[index + 1]}`);
      }
      return acc;
    }, [])
    .join(", ");

  console.log(argsStr);
};

parseArgs();

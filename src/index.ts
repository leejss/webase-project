import { createConnection } from "typeorm";

const main = async () => {
  // connection
  const { options } = await createConnection();
  console.log(`Connected to ${options.database}`);
};

main();

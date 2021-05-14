import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import express from "express";

const main = async () => {
  // connection
  const { options } = await createConnection();
  console.log(`Connected to ${options.database}`);

  const app = express();

  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/*.js"],
  });

  const server = new ApolloServer({
    schema,
  });
  server.applyMiddleware({
    app,
  });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

main();

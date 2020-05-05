import "reflect-metadata";
import express from "express";
import session from "express-session";

import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { User } from "./entity/User";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./UserResolver";

const startServer = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }: any) => ({ req, res }),
  });

  const app = express();

  app.use(
    session({
      secret: "h=1hjoishfu49218y8hoih9812y",
      resave: false,
      saveUninitialized: false,
    })
  );

  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: "http://localhost:3000",
    },
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

export const connectDb = async (retries = 5) => {
  while (retries) {
    try {
      const connection = await createConnection();
      console.log("Inserting user");
      const user = new User();
      user.email = "bobby@bobby.com";
      user.password = "bobby";
      await connection.manager.save(user);
      console.log("Saved a new user" + user.id);
      const users = await connection.manager.find(User);
      console.log("Loading users", users);
      console.log("Connection created");
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // wait 5 seconds
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
};

export const start = async () => {
  await connectDb();
  await startServer();
};

start();

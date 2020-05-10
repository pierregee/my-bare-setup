import "dotenv/config";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";

import { createAccessToken, createRefreshToken } from "./auth";
import { User } from "./entity/User";
import { UserResolver } from "./UserResolver";
import { sendRefreshToken } from "./sendRefreshToken";

const startServer = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }: any) => ({ req, res }),
  });
  const app = express();

  app.use(
    cors({
      credentials: true,
      origin: "http://0.0.0.0:3000",
    })
  );
  app.use(cookieParser());

  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: "2" });
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: "1" });
    }

    // token is valid and we can send back an access token
    const user = await User.findOne({ id: payload.userId });
    if (!user) {
      return res.send({ ok: false, accessToken: "3" });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: "" });
    }

    sendRefreshToken(res, createRefreshToken(user));
    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  app.use(
    session({
      secret: "h=1hjoishfu49218y8hoih9812y",
      resave: false,
      saveUninitialized: false,
    })
  );

  server.applyMiddleware({
    app,
    cors: false,
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

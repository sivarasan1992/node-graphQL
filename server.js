import express from "express";
import expressGraphQL from "express-graphql";
import schema from "./schema/schema";
const port = process.env.PORT || 5000;
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(port, () => console.log(`serer is running on ${port}`));

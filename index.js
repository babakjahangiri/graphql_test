import express from "express";
//import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./data/schema";

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql is amazing!");
});


app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5001, () =>
  console.log("running on server port localhost:5001/graphql")
);

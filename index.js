import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql is amazing!");
});

const root = { friend: () => {
    return {
        "id": 68789,
        "firstName": "Babak",
        "lastName": "Jahan",
        "gender": "Male",
        "email": [
            {email: "babak@yahoo.com"},
            {email: "babak@gmail.com"},
            {email: "babak@babak.com"}
        ]
    }
}};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
); 


app.listen(5001, ()=> console.log("running on server port localhost:5001/graphql"));


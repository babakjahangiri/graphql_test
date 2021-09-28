import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql is amazing!");
});


const friendDatabase = {};

class Friend{
    constructor(id, { firstName,lastName,gender,email }){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}

const root = { friend: () => {
    return {
        "id": 68789,
        "firstName": "Babak",
        "lastName": "Jahan",
        "gender": "Male",
        "email" : "babak@yahoo.com"
        // "email": [
        //     {email: "babak@yahoo.com"},
        //     {email: "babak@gmail.com"},
        //     {email: "babak@babak.com"}
        // ]
    }
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id,input);
    }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
); 


app.listen(5001, ()=> console.log("running on server port localhost:5001/graphql"));


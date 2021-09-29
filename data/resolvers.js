import { Friends } from "./dbConnectors";
// class Friend {
//   constructor(id, { firstName, lastName, gender, email, contacts }) {
//     this.id = id;
//     this.firstName = input.firstName;
//     this.lastName = input.lastName;
//     this.gender = input.gender;
//     this.email = input.email;
//     this.contacts = contacts;
//   }
// }

// resolver map
export const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return new Friends(id, friendDatabase[id]);
    },
  },

  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        age: input.age,
        email: input.email,
        contacts: input.contacts
      });

      newFriend.id = newFriend._id;

      return new Promise((resolve, reject) => {
        newFriend.save((err) => {
          if (err) reject(err);
          else resolve(newFriend);
        });
      });
    },
  },
};

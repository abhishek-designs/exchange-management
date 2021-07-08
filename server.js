const { ApolloServer } = require("apollo-server");

const users = [
  {
    id: "user-1",
    name: "John Doe",
  },
  {
    id: "user-2",
    name: "Mike Williams",
  },
  {
    id: "user-3",
    name: "Kevin",
  },
];

let id = users.length;

const typeDefs = `
    type Query {
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation {
        createUser(name: String!): User!
    }

    type User {
        id: ID!
        name: String!
    }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => {
      console.log(args);
      const user = users.filter(user => user.id === args.id);
      return user[0];
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      console.log(args);
      const newUser = {
        id: `user-${id + 1}`,
        name: args.name,
      };
      users.push(newUser);
      return newUser;
    },
  },
  User: {
    id: parent => parent.id,
    name: parent => parent.name,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`Server running at ${url}`))
  .catch(err => console.log(err));

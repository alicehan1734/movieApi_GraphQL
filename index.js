import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("Graphql Server Running"));


const { createServer } = require('graphql-yoga')
// Provide your schema
const server = createServer({
  typeDefs: `
    type Query {
      ping: String
    }
  `,
  resolvers: {
    Query: {
      ping: () => 'pong',
    },
  },
})
// Start the server and explore http://localhost:4000/graphql
server.start()
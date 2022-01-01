// const { createServer } = require('graphql-yoga')

// console.log("hello")
import { GraphQLServer } from 'graphql-yoga';
const server = new GraphQLServer({});

server.start(() => console.log("running"));


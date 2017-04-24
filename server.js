const express = require('express');
const { apolloServer } = require('apollo-server');
const schema = require('./data/schema');
const resolvers = require('./data/resolvers');
const env = require('./environment');

const GRAPHQL_PORT = env.port;
const app = express();

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema,
  resolvers,
}));

const server = app.listen(GRAPHQL_PORT, () => {
  const { port } = server.address();
  console.log(`GraphQL Server is now running on ${port}.`);
});
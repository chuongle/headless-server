import express from 'express';
import { apolloServer } from 'apollo-server';
import schema from './data/schema';
import resolvers from './data/resolvers';
import cors from 'cors';
import env from './environment';

const GRAPHQL_PORT = env.port;
const app = express();
app.use(cors());

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
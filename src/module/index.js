import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import * as trainee from './trainee';
import * as user from './user';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: {
      ...user.Query,
      ...trainee.Query,
    },
    Mutation: {
      ...user.Mutation,
      ...trainee.Mutation,
    },
    Subscription: {
      ...trainee.Subscription,
      ...user.Subscription,
    },
  },
  typeDefs,
};

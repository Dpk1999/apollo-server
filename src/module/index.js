import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import * as trainee from './trainee';
import * as user from './user';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
console.log('user', user);
const typeDefs = mergeTypes(typesArray, { all: true });
console.log('typeDefs ---->', typeDefs);
console.log('user.getMyProfile ---->', user);

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

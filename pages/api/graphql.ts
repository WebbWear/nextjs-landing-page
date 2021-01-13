// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    id: Int!
    firstName: String
  }
`;

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ firstName: "Nextjs" }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer.createHandler({ path: "/api/graphql" });

const grapql = require("graphql");
const { GraphQLObjectType, GraphQLString } = grapql;

// User Type
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    email: { type: GraphQLString },
  }),
});

module.exports = UserType;

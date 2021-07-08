const grapql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = grapql;

// User Type
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
  }),
});

module.exports = UserType;

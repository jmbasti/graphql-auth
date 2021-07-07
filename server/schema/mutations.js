const grapql = require("graphql");
const { GraphQLObjectType, GraphQLString } = grapql;
const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

// MUTATIONS
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Signup
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, request) {
        return AuthService.signup({
          email: args.email,
          password: args.password,
          req: request,
        });
      },
    },
    // Signin
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, request) {
        return AuthService.login({
          email: args.email,
          password: args.password,
          req: request,
        });
      },
    },
    // Logout
    logout: {
      type: UserType,
      resolve(parentValue, args, request) {
        const { user } = request;
        request.logout();
        return user;
      },
    },
  },
});

module.exports = mutation;

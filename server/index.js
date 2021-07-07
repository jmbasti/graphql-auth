const express = require("express");
const session = require("express-session");
const models = require("./models");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const passport = require("passport");
const passportConfig = require("./services/auth");
const schema = require("./schema/schema");
const cors = require("cors");
require("dotenv").config();

const app = express();
// CORS
app.use(cors());
// BODY_PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// MONGODB
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
// SESSIONS
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "aaabbbccc",
  })
);
// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
// GRAPHQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(process.env.PORT, () => {
  console.log("Listening");
});

module.exports = app;

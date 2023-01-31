const { PrismaClient } = require("@prisma/client");
const { GraphQLScalarType, Kind } = require("graphql");
const bcrypt = require("bcryptjs");
const { signToken } = require("../utils/auth");

const prisma = new PrismaClient();

const resolvers = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "DateTime scalar type",

    serialize(value) {
      const date = new Date(value);

      return date.toUTCString();
    },
    parseValue(value) {
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }

      return null;
    },
    serialize(value) {
      const date = new Date(value);
      return new Intl.DateTimeFormat("en-au", { dateStyle: "short" }).format(
        date
      );
    },
  }),

  Query: {},
  Mutation: {
    addUser: async (parent, { email, password }, { res }) => {
      const findUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (findUser) {
        return "User already exists";
      }
      const saltRounds = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, saltRounds);

      const user = await prisma.user.create({
        data: { email, password },
      });
      const token = signToken(user);
      return { user, token };
    },

    login: async (parent, { email, password }, { res }) => {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      // if (!user) {
      //   return "Login error, please try again.";
      // }

      const hashedPassword = user.password;
      if (bcrypt.compareSync(password, hashedPassword) === true) {
        const token = signToken(user);
        return { user, token };
      } else {
        throw Error("Could not login, please try again.");
      }
    },
    logout: async (parent, args, { res, user }) => {
      if (!user) {
        return false;
      }
      return true;
    },
    addTodo: async (parent, { title, description, timeframe }, { user }) => {
      // ? Adds a todo item with the author id
      const { id } = user;

      const updatedUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          todos: { push: { title, description, timeframe } },
        },
      });
      return updatedUser;
    },
  },
};

module.exports = resolvers;

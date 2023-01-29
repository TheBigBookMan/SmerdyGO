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
  },
};

module.exports = resolvers;

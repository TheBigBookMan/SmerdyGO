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

  Query: {
    getTodos: async (parent, { completeOrNot }, { user }) => {
      const { id } = user;
      const { todos } = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          todos: true,
        },
      });

      const listTodos = todos.filter((todo) => {
        if (todo.isCompleted === completeOrNot) {
          return todo;
        }
      });

      return listTodos;
    },
  },
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
      const { id } = user;
      const createdTodo = await prisma.toDo.create({
        data: {
          title,
          description,
          timeframe,
          authorId: id,
        },
      });

      //? maybe later decide i want the user to have an array of todo ids???
      // const updatedUser = await prisma.user.update({
      //   where: {
      //     id,
      //   },
      //   data: {
      //     todos: { push: { title, description, timeframe } },
      //   },
      // });
      return createdTodo;
    },
    completeTodo: async (parent, { todoId }, { user }) => {
      const { id } = user;
    },
  },
};

module.exports = resolvers;

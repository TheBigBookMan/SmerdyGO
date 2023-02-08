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
    // * Todos related
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
    // * Goals related
    getGoals: async (parent, args, { user }) => {
      const { id } = user;
      const { goals } = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          goals: true,
        },
      });
      console.log(goals);
      return goals;
    },
  },
  Mutation: {
    // * User related
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
    // * Todos related
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

      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();
      const formattedToday = dd + "/" + mm + "/" + yyyy;

      const findTodo = await prisma.toDo.update({
        where: {
          id: todoId,
        },
        data: {
          isCompleted: true,
          dateCompleted: formattedToday,
        },
      });
      return findTodo;
    },
    deleteTodo: async (parent, { todoId }, { user }) => {
      await prisma.toDo.delete({
        where: {
          id: todoId,
        },
      });
    },
    // *Goals related
    addGoal: async (
      parent,
      { title, measurement, amount, description, category },
      { user }
    ) => {
      const { id } = user;
      await prisma.goal.create({
        data: {
          title,
          measurement,
          amount,
          description,
          category,
          authorId: id,
        },
      });

      return user;
    },
  },
};

module.exports = resolvers;

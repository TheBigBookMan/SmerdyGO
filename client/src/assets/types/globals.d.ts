export {};

declare module "react";
declare module "react/jsx-runtime";

declare global {
  interface UserForm {
    email: string;
    password: string;
  }

  interface ToDoForm {
    title: string;
    description: string;
    timeframe: string;
  }

  interface ToDo extends ToDoForm {
    id: string;
    isCompleted: boolean;
    dateAdded: string;
    dateCompleted: string | null;
  }

  interface Prototypes {
    children: React.ReactNode;
  }
}

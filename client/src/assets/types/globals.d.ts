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

  interface ToDo {
    title: string;
    description: string;
    isCompleted: boolean;
    dateAdded: string;
    dateCompleted: string | null;
    timeframe: string;
  }

  interface Prototypes {
    children: React.ReactNode;
  }
}

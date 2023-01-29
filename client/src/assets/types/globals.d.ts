export {};

declare module "react";
declare module "react/jsx-runtime";

declare global {
  interface UserForm {
    email: string;
    password: string;
  }

  interface ToDo {
    title: string;
    description: string;
  }

  interface Prototypes {
    children: React.ReactNode;
  }
}

export {};

declare module "react";
declare module "react/jsx-runtime";

declare global {
  interface UserForm {
    email: string;
    password: string;
  }
}

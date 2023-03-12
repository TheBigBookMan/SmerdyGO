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

  interface GoalForm {
    title: string;
    description: string;
    measurement: string;
    amount: number;
    category: string;
  }

  interface Goal extends GoalForm {
    subGoals: SubGoal[];
    amountCompleted: number;
    id: string;
  }

  interface SubGoal {
    id: string;
    goal: Goal;
    goalId: string;
    title: string;
    amount: number;
    dateCompleted: string;
    dateToComplete: string;
    description: string;
    reward: string;
    editMode: boolean;
  }

  interface Prototypes {
    children: React.ReactNode;
  }
}

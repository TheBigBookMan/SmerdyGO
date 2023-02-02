export const sortTimeframeLists = (list: ToDo[], todoTimeframe: string) => {
  let sortedList;
  if (todoTimeframe === "daily") {
    sortedList = list.filter((todo) => todo.timeframe === "daily");
  } else if (todoTimeframe === "weekly") {
    sortedList = list.filter((todo) => todo.timeframe === "weekly");
  } else if (todoTimeframe === "monthly") {
    sortedList = list.filter((todo) => todo.timeframe === "monthly");
  } else if (todoTimeframe === "yearly") {
    sortedList = list.filter((todo) => todo.timeframe === "yearly");
  } else if (todoTimeframe === "life") {
    sortedList = list.filter((todo) => todo.timeframe === "life");
  }

  return sortedList;
};

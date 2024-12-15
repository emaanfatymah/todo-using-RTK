export const TodoData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/todos/random");
    const data = await response.json();
    console.log(data.todo);
    return data.todo;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

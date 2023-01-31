export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data,
      date: new Date().toLocaleDateString(),
      completedDate: "Hello",
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const updateCompleted = (id, isCompleted, date, completedDate) => {
  return {
    type: "UPDATE_COMPLETED",
    id,
    isCompleted,
    date,
    completedDate: new Date().toLocaleDateString(),
  };
};

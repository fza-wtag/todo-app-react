import { v4 as uuidv4 } from "uuid";

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: uuidv4(),
      data,
      isCompleted: false,
      date: new Date().toLocaleDateString(),
      completedDate: null,
      dateNow: Date.now(),
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

export const toggleAddTaskVisibility = (isAddTaskVisible) => {
  return {
    type: "TOGGLE_ADD_TASK_VISIBILITY",
    isAddTaskVisible,
  };
};

export const toggleAddTaskButtonVisibility = (isCreateButtonDisabled) => {
  return {
    type: "TOGGLE_ADD_TASK_BUTTON_VISIBILITY",
    isCreateButtonDisabled,
  };
};

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data,
      isCompleted: false,
      date: new Date().toLocaleDateString(),
      completedDate: null,
      dateNow: Date.now(),
      onEdit: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const markAsCompleted = (id, isCompleted, date, completedDate) => {
  return {
    type: "UPDATE_AS_COMPLETED",
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

export const changeEditState = (id, onEdit) => {
  return {
    type: "CHANGE_EDIT_STATE",
    id,
    onEdit: !onEdit,
  };
};

export const markCompletedOnEdit = (
  id,
  isCompleted,
  date,
  completedDate,
  onEdit
) => {
  return {
    type: "MAKE_COMPLETED_ON_EDIT",
    id,
    isCompleted,
    date,
    completedDate: new Date().toLocaleDateString(),
    onEdit,
  };
};

export const updatedTodo = (id, data, onEdit) => {
  return {
    type: "UPDATED_TODO",
    id,
    data,
    onEdit,
  };
};

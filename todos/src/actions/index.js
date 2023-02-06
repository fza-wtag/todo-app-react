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

export const updateCompleted = (id, isCompleted, date, completedDate) => {
  return {
    type: "UPDATE_COMPLETED",
    id,
    isCompleted,
    date,
    completedDate,
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

export const editTodo = (id, onEdit) => {
  return {
    type: "EDIT_TODO",
    id,
    onEdit: !onEdit,
  };
};

export const editUpdateCompleted = (
  id,
  isCompleted,
  date,
  completedDate,
  onEdit
) => {
  return {
    type: "EDIT_UPDATE_COMPLETED",
    id,
    isCompleted,
    date,
    completedDate,
    onEdit,
  };
};

export const updateTodo = (id, data, onEdit) => {
  return {
    type: "UPDATE_TODO",
    id,
    data,
    onEdit,
  };
};

export const updateCurrentPage = (page) => {
  return {
    type: "UPDATE_CURRENT_PAGE",
    page,
    
  };
};
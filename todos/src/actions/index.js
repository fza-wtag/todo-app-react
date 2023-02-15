import {
  addTodoSupabase,
  deleteTodoSupabase,
  updateStateTodoSupabase,
} from "supabaseData";

export const addTodo = (data) => async (dispatch) => {
  try {
    const response = await addTodoSupabase(
      data,
      new Date().toLocaleDateString()
    );
    const tableData = response.data;
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: tableData.id,
        data: tableData.data,
        isCompleted: tableData.isCompleted,
        date: tableData.date,
        completedDate: tableData.completedDate,
        onEdit: tableData.onEdit,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const response = await deleteTodoSupabase(id);
    const tableData = response.data;
    dispatch({
      type: "DELETE_TODO",
      id: tableData.id,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateCompleted = (id, isCompleted, date) => async (dispatch) => {
  try {
    const response = await updateStateTodoSupabase(
      id,
      isCompleted,
      new Date().toLocaleDateString()
    );
    const tableData = response.data;
    dispatch({
      type: "UPDATE_COMPLETED",
      id: tableData.id,
      isCompleted: tableData.isCompleted,
      date: tableData.date,
      completedDate: tableData.completedDate,
    });
  } catch (error) {
    console.error(error);
  }
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

export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    filter,
  };
};

export const setIconVisibility = (iconState) => {
  return {
    type: "SET_ICON_VISIBIlITY",
    iconState,
  };
};

export const setSearchValue = (searchValue) => {
  return {
    type: "SET_SEARCH_VALUE",
    searchValue,
  };
};

export const setLoadingState = (loadingState) => {
  return {
    type: "SET_LOADING_STATE",
    loadingState,
  };
};

export const addInitialData = (data) => {
  return {
    type: "ADD_INITIAL_DATA",
    payload: data,
  };
};

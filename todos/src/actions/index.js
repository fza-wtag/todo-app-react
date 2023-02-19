import {
  addTodoSupabase,
  deleteTodoSupabase,
  updateStateTodoSupabase,
  updateStateTodoSupabaseOnEdit,
  updateTodoSupabase,
} from "supabaseData";
import {
  STATE_CHANGE_MESSAGE,
  EDIT_SUCCESS_MESSAGE,
  TASK_ADDED_MESSAGE,
  TASK_DELETE_MESSAGE,
  WENT_WRONG_MESSAGE,
} from "constants";
import { successMessage, dangerMessage } from "toastMethods";

export const addTodo = (data, date) => async (dispatch) => {
  try {
    dispatch(setAddCardLoadingState(true));
    const response = await addTodoSupabase(data, date);
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
    successMessage(TASK_ADDED_MESSAGE);
  } catch (error) {
    dangerMessage(WENT_WRONG_MESSAGE);
  } finally {
    dispatch(setAddCardLoadingState(false));
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch(setDeleteCardLoadingState(true));
    const response = await deleteTodoSupabase(id);
    const tableData = response.data;
    dispatch({
      type: "DELETE_TODO",
      id: tableData.id,
    });
    dangerMessage(TASK_DELETE_MESSAGE);
  } catch (error) {
    dangerMessage(WENT_WRONG_MESSAGE);
  } finally {
    dispatch(setDeleteCardLoadingState(false));
  }
};

export const updateCompleted =
  (id, isCompleted, date, completedDate) => async (dispatch) => {
    try {
      dispatch(setCompletedCardLoadingState(true));
      const response = await updateStateTodoSupabase(
        id,
        isCompleted,
        completedDate
      );
      const tableData = response.data;
      dispatch({
        type: "UPDATE_COMPLETED",
        id: tableData.id,
        isCompleted: tableData.isCompleted,
        date: tableData.date,
        completedDate: tableData.completedDate,
      });
      successMessage(STATE_CHANGE_MESSAGE);
    } catch (error) {
      dangerMessage(WENT_WRONG_MESSAGE);
    } finally {
      dispatch(setCompletedCardLoadingState(false));
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

export const editUpdateCompleted =
  (id, isCompleted, date, completedDate, onEdit) => async (dispatch) => {
    try {
      dispatch(setEditCardLoadingState(true));
      const response = await updateStateTodoSupabaseOnEdit(
        id,
        isCompleted,
        completedDate,
        !onEdit
      );
      const tableData = response.data;
      dispatch({
        type: "EDIT_UPDATE_COMPLETED",
        id: tableData.id,
        isCompleted: tableData.isCompleted,
        date: tableData.date,
        completedDate: tableData.completedDate,
        onEdit: tableData.onEdit,
      });
      successMessage(STATE_CHANGE_MESSAGE);
    } catch (error) {
      dangerMessage(WENT_WRONG_MESSAGE);
    } finally {
      dispatch(setEditCardLoadingState(false));
    }
  };

export const updateTodo = (id, data, onEdit, Toastflag) => async (dispatch) => {
  try {
    dispatch(setEditCardLoadingState(true));
    const response = await updateTodoSupabase(id, data, !onEdit);
    const tableData = response.data;
    dispatch({
      type: "UPDATE_TODO",
      id: tableData.id,
      data: tableData.data,
      onEdit: tableData.onEdit,
    });
    Toastflag && successMessage(EDIT_SUCCESS_MESSAGE);
  } catch (error) {
    dangerMessage(WENT_WRONG_MESSAGE);
  } finally {
    dispatch(setEditCardLoadingState(false));
  }
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

export const setSplashLoadingState = (splashLoadingState) => {
  return {
    type: "SET_SPLASH_LOADING_STATE",
    splashLoadingState,
  };
};

export const setAddCardLoadingState = (addCardLoadingState) => {
  return {
    type: "SET_ADD_CARD_LOADING_STATE",
    addCardLoadingState,
  };
};

export const setEditCardLoadingState = (editCardLoadingState) => {
  return {
    type: "SET_EDIT_CARD_LOADING_STATE",
    editCardLoadingState,
  };
};

export const setDeleteCardLoadingState = (deleteCardLoadingState) => {
  return {
    type: "SET_DELETE_CARD_LOADING_STATE",
    deleteCardLoadingState,
  };
};

export const setCompletedCardLoadingState = (completedCardLoadingState) => {
  return {
    type: "SET_COMPLETED_CARD_LOADING_STATE",
    completedCardLoadingState,
  };
};

export const selectedCardId = (currentSelectedId) => {
  return {
    type: "SELECTED_CARD_ID",
    currentSelectedId,
  };
};

const initialData = {
  isAddTaskVisible: false,
  isCreateBtnDisabled: false,
};
const toggleReducers = (state = initialData, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_TASK_VISIBILITY":
      return {
        ...state,
        isAddTaskVisible: !state.isAddTaskVisible,
      };
    case "TOGGLE_ADD_TASK_BUTTON_VISIBILITY":
      return {
        ...state,
        isCreateBtnDisabled: !state.isCreateBtnDisabled,
      };
    default:
      return state;
  }
};
export default toggleReducers;

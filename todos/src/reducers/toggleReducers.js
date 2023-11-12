const initialData = {
  isAddTaskVisible: false,
  isCreateButtonDisabled: false,
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
        isCreateButtonDisabled: !state.isCreateButtonDisabled,
      };
    default:
      return state;
  }
};
export default toggleReducers;

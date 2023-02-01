const toggleReducers = (state = { isAddTaskVisible: false }, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_TASK_VISIBILITY":
      return {
        ...state,
        isAddTaskVisible: !state.isAddTaskVisible,
      };
    default:
      return state;
  }
};
export default toggleReducers;

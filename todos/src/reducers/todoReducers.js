const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_INITIAL_DATA":
      const { payload } = action;
      return {
        ...state,
        list: [...payload].sort((a, b) => b.id - a.id),
      };

    case "ADD_TODO":
      const { id, data, isCompleted, date, completedDate, onEdit } =
        action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            isCompleted: isCompleted,
            date: date,
            completedDate: completedDate,
            onEdit: onEdit,
          },
        ].sort((a, b) => b.id - a.id),
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "MARK_AS_COMPLETED":
      const markedAsCompletedList = state.list.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: action.isCompleted,
            date: action.date,
            completedDate: action.completedDate,
          };
        }
        return todo;
      });

      return {
        ...state,
        list: markedAsCompletedList,
      };
    case "CHANGE_EDIT_STATE":
      const changedStateList = state.list.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            onEdit: action.onEdit,
          };
        }
        return todo;
      });

      return {
        ...state,
        list: changedStateList,
      };

    case "UPDATE_TODO":
      const updatedList = state.list.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            data: action.data,
            onEdit: !action.onEdit,
          };
        }
        return todo;
      });
      return {
        ...state,
        list: updatedList,
      };

    case "MARK_COMPLETED_ON_EDIT":
      const completedTodoList = state.list.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: action.isCompleted,
            date: action.date,
            completedDate: action.completedDate,
            onEdit: !action.onEdit,
          };
        }
        return todo;
      });

      return {
        ...state,
        list: completedTodoList,
      };

    default:
      return state;
  }
};

export default todoReducers;

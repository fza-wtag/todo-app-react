const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data, isCompleted, date, completedDate, dateNow, onEdit } =
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
            dateNow: dateNow,
            onEdit: onEdit,
          },
        ].sort((a, b) => b.dateNow - a.dateNow),
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "UPDATE_AS_COMPLETED":
      const updatedAsCompletedList = state.list.map((todo) => {
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
        list: updatedAsCompletedList,
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

    case "UPDATED_TODO":
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

    case "MAKE_COMPLETED_ON_EDIT":
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

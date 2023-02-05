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

    case "UPDATE_COMPLETED":
      const updatedList = state.list.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: action.isCompleted,
            date: action.date,
            completedDate: new Date().toLocaleDateString(),
          };
        }
        return todo;
      });

      return {
        ...state,
        list: updatedList,
      };
    case "EDIT_TODO":
      const updatedList2 = state.list.map((todo) => {
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
        list: updatedList2,
      };
    case "EDIT_UPDATE_COMPLETED":
      const editUdupdatedList = state.list.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: action.isCompleted,
            date: action.date,
            completedDate: new Date().toLocaleDateString(),
            onEdit: !action.onEdit,
          };
        }
        return todo;
      });

      return {
        ...state,
        list: editUdupdatedList,
      };
    default:
      return state;
  }
};

export default todoReducers;

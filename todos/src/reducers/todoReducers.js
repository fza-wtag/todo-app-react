const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data, date, completedDate } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            isCompleted: false,
            date: date,
            completedDate: completedDate,
          },
        ]
          .slice()
          .reverse(),
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
            date: action.date, //eikhane kaj korte hobe
            completedDate: action.completedDate,
          };
        }
        return todo;
      });

      return {
        ...state,
        list: updatedList,
      };

    default:
      return state;
  }
};

export default todoReducers;

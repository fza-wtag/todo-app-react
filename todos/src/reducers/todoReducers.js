const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();
      let newDate = `${day}.${month}.${year}`; //formating date as per the design

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            isCompleted: false,
            date: newDate,
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
        if (todo.id === action.taskId) {
          return { ...todo, isCompleted: action.isCompleted };
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

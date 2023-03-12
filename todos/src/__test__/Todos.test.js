import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import Todos from "components/Todos";
import configureStore from "redux-mock-store";
import { waitFor } from "@testing-library/react";

describe("<Todos/>", () => {
  const mockStore = configureStore([]);
  let store;
  beforeEach(() => {
    store = mockStore({
      todoReducers: {
        list: [
          {
            id: 1,
            data: "Buy groceries",
            isCompleted: false,
            date: "2022-03-10",
            completedDate: null,
            onEdit: false,
          },
          {
            id: 2,
            data: "Do laundry",
            isCompleted: false,
            date: "2022-03-11",
            completedDate: null,
            onEdit: false,
          },
        ],
      },
      filterReducer: {
        filter: "ALL",
      },
      toggleReducers: {
        isAddTaskVisible: false,
        isCreateButtonDisabled: false,
      },
      currentPageReducer: {
        currentPage: 1,
      },
      searchReducers: {
        searchValue: "",
      },
      loadingReducers: {
        loadingState: false,
        addCardLoadingState: false,
      },
    });
  });

  const MockTodos = () => {
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  };

  it("renders the Completed Task card", () => {
    render(<MockTodos />);
    const mainDiv = screen.getByTestId("todos");
    expect(mainDiv).toBeInTheDocument();
  });

  it("Doesn't renders AddTask card when isAddTaskVisible and addCardLoadingState is false", () => {
    render(<MockTodos />);
    const addTaskComponent = screen.queryByTestId("add-task");
    expect(addTaskComponent).toBeNull();
  });

});

import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import Todos from "components/Todos";
import configureStore from "redux-mock-store";
import { ALL } from "constants";

describe("<Todos/>", () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const mockStore = configureStore([]);
  let store;
  beforeEach(() => {
    store = mockStore({
      todoReducers: {
        list: [
          {
            id: 898,
            data: "task 2",
            isCompleted: false,
            date: "12/03/2023",
            completedDate: null,
            onEdit: false,
          },
          {
            id: 897,
            data: "TASK 1",
            isCompleted: true,
            date: "12/03/2023",
            completedDate: "12/03/2023",
            onEdit: false,
          },
          {
            id: 896,
            data: "aas",
            isCompleted: true,
            date: "12/03/2023",
            completedDate: "12/03/2023",
            onEdit: false,
          },
          {
            id: 895,
            data: "dfgdfg",
            isCompleted: true,
            date: "12/03/2023",
            completedDate: "12/03/2023",
            onEdit: false,
          },
          {
            id: 894,
            data: "fdgdfg",
            isCompleted: true,
            date: "12/03/2023",
            completedDate: "12/03/2023",
            onEdit: false,
          },
          {
            id: 893,
            data: "hjkhjk fgh",
            isCompleted: false,
            date: "12/03/2023",
            completedDate: null,
            onEdit: false,
          },
          {
            id: 891,
            data: "fgdfg",
            isCompleted: true,
            date: "12/03/2023",
            completedDate: "12/03/2023",
            onEdit: false,
          },
          {
            id: 890,
            data: "asasfg",
            isCompleted: true,
            date: "12/03/2023",
            completedDate: "12/03/2023",
            onEdit: false,
          },
          {
            id: 888,
            data: "asas",
            isCompleted: true,
            date: "12/03/2023",
            completedDate: "12/03/2023",
            onEdit: false,
          },
          {
            id: 887,
            data: "asas",
            isCompleted: true,
            date: "09/03/2023",
            completedDate: "09/03/2023",
            onEdit: false,
          },
          {
            id: 886,
            data: "sdsddfdf",
            isCompleted: true,
            date: "06/03/2023",
            completedDate: "12/03/2023",
            onEdit: false,
          },
          {
            id: 885,
            data: "sdklfnsbjdkf",
            isCompleted: true,
            date: "06/03/2023",
            completedDate: "06/03/2023",
            onEdit: false,
          },
          {
            id: 884,
            data: "dfbhjdf hdhhd sdsd",
            isCompleted: true,
            date: "06/03/2023",
            completedDate: "09/03/2023",
            onEdit: false,
          },
        ],
      },
      filterReducer: {
        filter: ALL,
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

  it("doesn't renders AddTask card when isAddTaskVisible and addCardLoadingState is false", () => {
    render(<MockTodos />);
    const addTaskComponent = screen.queryByTestId("add-task");
    expect(addTaskComponent).toBeNull();
  });

  it("renders the correct amount of card", () => {
    render(<MockTodos />);
    const tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(12);
  });

  it("pagination works perfectly", () => {
    store.dispatch({
      type: "UPDATE_CURRENT_PAGE",
      payload: { currentPage: 2 },
    });
    render(<MockTodos />);
    const tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(12);
  });
});

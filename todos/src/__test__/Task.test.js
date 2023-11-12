import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Task from "components/Task";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("<Task/>", () => {
  let store;
  let initialList = [
    {
      id: 1,
      data: "test data1",
      isCompleted: false,
      date: "12/03/2023",
      completedDate: null,
      onEdit: false,
    },
    {
      id: 2,
      data: "test data2",
      isCompleted: false,
      date: "12/03/2023",
      completedDate: null,
      onEdit: false,
    },
  ];
  const testProps = {
    id: 2,
    data: "test data2",
    isCompleted: false,
    date: "12/03/2023",
    completedDate: null,
    onEdit: false,
  };

  beforeEach(() => {
    store = mockStore({
      todoReducers: {
        list: initialList,
      },
      loadingReducers: {
        completedCardLoadingState: false,
        deleteCardLoadingState: false,
        currentSelectedId: null,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the ShowTask component with loading false when the task is not being edited and loading is false", () => {
    render(
      <Provider store={store}>
        <Task {...testProps} />
      </Provider>
    );

    expect(screen.getByTestId("show-task")).toBeInTheDocument();
    expect(screen.queryByTestId("edit-task")).not.toBeInTheDocument();
    const spinnerElement = screen.queryByAltText("loading..");
    expect(spinnerElement).not.toBeInTheDocument();
  });

  it("renders the ShowTask component with loading true when the task is not being edited and loading is true", () => {
    store = mockStore({
      todoReducers: {
        list: initialList,
      },
      loadingReducers: {
        completedCardLoadingState: true, // set loading state to true
        deleteCardLoadingState: false,
        currentSelectedId: 2,
      },
    });

    render(
      <Provider store={store}>
        <Task {...testProps} />
      </Provider>
    );

    expect(screen.getByTestId("show-task")).toBeInTheDocument();
    expect(screen.queryByTestId("edit-task")).not.toBeInTheDocument();
    const spinnerElement = screen.queryByAltText("loading..");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders the EditTask component when the task is being edited", () => {
    store = mockStore({
      todoReducers: {
        list: [
          {
            id: 2,
            data: "test data2",
            isCompleted: false,
            date: "12/03/2023",
            completedDate: null,
            onEdit: true,
          },
        ],
      },
      loadingReducers: {
        completedCardLoadingState: false,
        deleteCardLoadingState: false,
        currentSelectedId: 2,
      },
    });
    const onEditProps = {
      id: 2,
      data: "test data2",
      isCompleted: false,
      date: "12/03/2023",
      completedDate: null,
      onEdit: true,
    };

    render(
      <Provider store={store}>
        <Task {...onEditProps} />
      </Provider>
    );
    expect(screen.getByTestId("edit-task")).toBeInTheDocument();
  });
});

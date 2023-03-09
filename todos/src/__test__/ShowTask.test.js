import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import ShowTask from "components/ShowTask";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

describe("ShowTask", () => {
  let store;
  const testProps = {
    loading: false,
    id: "1",
    date: "01/01/2022",
    title: "Test Task",
    isCompleted: false,
    completedDate: "",
    onEdit: false,
    currentData: {},
  };

  beforeEach(() => {
    store = mockStore({});
  });

  it("Renders the title and created date correctly", () => {
    render(
      <Provider store={store}>
        <ShowTask {...testProps} />
      </Provider>
    );
    const title = screen.getByText(/Test Task/i);
    const createdDate = screen.getByText(/Created At:/i);
    expect(title).toBeInTheDocument();
    expect(createdDate).toBeInTheDocument();
    expect(createdDate).toHaveTextContent("01.01.2022");
  });

  it("Renders the completed task component if the task is completed", () => {
    const completedProps = { ...testProps, isCompleted: true };
    render(
      <Provider store={store}>
        <ShowTask {...completedProps} />
      </Provider>
    );
    const completedComponent = screen.getByTestId("completed-task-component");
    expect(completedComponent).toBeInTheDocument();
  });

  it("Renders the incomplete task component if the task is not completed", () => {
    const incompleteProps = { ...testProps, isCompleted: false };
    render(
      <Provider store={store}>
        <ShowTask {...incompleteProps} />
      </Provider>
    );
    const incompleteComponent = screen.getByTestId("incomplete-task-component");
    expect(incompleteComponent).toBeInTheDocument();
  });

  it("Displays a spinner when loading prop is true", () => {
    const loadingProps = { ...testProps, loading: true };
    render(
      <Provider store={store}>
        <ShowTask {...loadingProps} />
      </Provider>
    );
    const spinner = screen.getByAltText("loading..");
    expect(spinner).toBeInTheDocument();
  });
});

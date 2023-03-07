import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import store from "store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import FilterButtons from "components/FilterButtons";

const MockEmptyTaskList = () => {
  return (
    <Provider store={store}>
      <FilterButtons />
    </Provider>
  );
};

describe("<EmptyTaskList/>", () => {
  it("renders the Empty Task list component", () => {
    render(<MockEmptyTaskList />);
    const mainDiv = screen.getByTestId("main-div");
    expect(mainDiv).toBeInTheDocument();
  });

  it("Invokes the handleAllTodos function on All button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <FilterButtons>
          return(
          <button onClick={mockOnClick()}>All</button>)
        </FilterButtons>
      </Provider>
    );
    const buttonElement = screen.getByTestId("all-button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Invokes the handleIncompleteTodos function on Incomplete button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <FilterButtons>
          return(
          <button onClick={mockOnClick()}>Incomplete</button>)
        </FilterButtons>
      </Provider>
    );
    const buttonElement = screen.getByTestId("incomplete-button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Invokes the handleCompleteTodos function on complete button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <FilterButtons>
          return(
          <button onClick={mockOnClick()}>Complete</button>)
        </FilterButtons>
      </Provider>
    );
    const buttonElement = screen.getByTestId("complete-button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

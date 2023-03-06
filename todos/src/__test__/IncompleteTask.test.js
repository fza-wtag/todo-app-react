import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import store from "store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import IncompleteTask from "components/IncompleteTask";

const MockAddTask = () => {
  return (
    <Provider store={store}>
      <IncompleteTask />
    </Provider>
  );
};

describe("<IncompletTask/>", () => {
  it("renders the Completed Task card", () => {
    render(<MockAddTask />);
    const mainDiv = screen.getByTestId("main-div");
    expect(mainDiv).toBeInTheDocument();
  });

  it("Invokes the handleDelete function on delete icon button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <IncompleteTask>
          return(
          <button className="todo__icon-btn" onClick={mockOnClick()}></button>)
        </IncompleteTask>
      </Provider>
    );
    const buttonElement = screen.getByTestId("incom-delete-btn");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Invokes the handleDone function on done icon button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <IncompleteTask>
          return(
          <button className="todo__icon-btn" onClick={mockOnClick()}></button>)
        </IncompleteTask>
      </Provider>
    );
    const buttonElement = screen.getByTestId("incom-done-btn");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Invokes the handleEdit function on edit icon button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <IncompleteTask>
          return(
          <button className="todo__icon-btn" onClick={mockOnClick()}></button>)
        </IncompleteTask>
      </Provider>
    );
    const buttonElement = screen.getByTestId("incom-edit-btn");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

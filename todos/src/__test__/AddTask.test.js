import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "components/AddTask";
import store from "store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

const MockAddTask = () => {
  return (
    <Provider store={store}>
      <AddTask />
    </Provider>
  );
};

describe("<AddTask/>", () => {
  it("renders the AddTask card", () => {
    render(<MockAddTask />);
    const mainDiv = screen.getByTestId("main-div");
    expect(mainDiv).toBeInTheDocument();
  });

  it("updates the textarea input value when the user types in the input field", () => {
    render(<MockAddTask />);
    const textarea = screen.getByPlaceholderText(
      "Add new task.. [3-50 characters]"
    );
    const userInput = "New task";
    fireEvent.change(textarea, { target: { value: userInput } });
    expect(textarea.value).toBe(userInput);
  });

  it("Text box will remain empty after Add Task buttonclick with empty userinput", () => {
    render(<MockAddTask />);
    const textarea = screen.queryByTestId("text-area");
    const userInput = "";
    const buttonElement = screen.getByRole("button", { name: /Add Task/i });
    fireEvent.change(textarea, { target: { value: userInput } });
    fireEvent.click(buttonElement);
    expect(textarea.value).toBe(userInput);
  });

  it("Invokes the handleAddTaskButtonClick function on button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <AddTask>
          return(
          <button className="btn btn__save_button" onClick={mockOnClick()}>
            Add Task
          </button>
          )
        </AddTask>
      </Provider>
    );
    const buttonElement = screen.queryByText("Add Task");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Invokes they handleKeyUp function on keyup", () => {
    const mockOnKeyUp = jest.fn();
    render(
      <Provider store={store}>
        <AddTask>
          <textarea onKeyUp={mockOnKeyUp()} data-testid="text-area" />
        </AddTask>
      </Provider>
    );
    const textarea = screen.queryByTestId("text-area");
    fireEvent.keyUp(textarea);
    expect(mockOnKeyUp).toHaveBeenCalledTimes(1);
  });

  it("Invokes the handleDelButton function on del icon button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <AddTask>
          return(
          <button className="todo__icon-btn" onClick={mockOnClick()}></button>)
        </AddTask>
      </Provider>
    );
    const buttonElement = screen.getByTestId("del-btn");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

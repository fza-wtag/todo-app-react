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

describe("AddTask Unit Tests", () => {
  it("renders the main div of AddTask", () => {
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
});

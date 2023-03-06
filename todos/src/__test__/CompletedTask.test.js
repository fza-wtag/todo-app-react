import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import store from "store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import CompletedTask from "components/CompletedTask";

const MockAddTask = () => {
  return (
    <Provider store={store}>
      <CompletedTask />
    </Provider>
  );
};

describe("<CompletedTask/>", () => {
  it("renders the Completed Task card", () => {
    render(<MockAddTask />);
    const mainDiv = screen.getByTestId("main-div");
    expect(mainDiv).toBeInTheDocument();
  });

  it("Invokes the handleDelete function on delete icon button click", () => {
    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <CompletedTask>
          return(
          <button className="todo__icon-btn" onClick={mockOnClick()}></button>)
        </CompletedTask>
      </Provider>
    );
    const buttonElement = screen.getByTestId("com-delete-btn");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("displays correct completion duration when complication day is equal to 1", () => {
    render(
      <Provider store={store}>
        <CompletedTask
          loading={false}
          id="1"
          date="01/03/2022"
          isCompleted={true}
          completedDate="01/03/2022"
        />
      </Provider>
    );
    expect(screen.getByTestId("main-div")).toHaveTextContent(
      "Completed in a day"
    );
  });

  it("displays correct completion duration when complication day is more than 1", () => {
    render(
      <Provider store={store}>
        <CompletedTask
          loading={false}
          id="1"
          date="01/03/2022"
          isCompleted={true}
          completedDate="03/03/2022"
        />
      </Provider>
    );
    expect(screen.getByTestId("main-div")).toHaveTextContent(
      "Completed in 3 day"
    );
  });
});

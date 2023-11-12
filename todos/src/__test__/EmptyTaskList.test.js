import React from "react";
import { render, screen } from "@testing-library/react";
import store from "store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import EmptyTaskList from "components/EmptyTaskList";

const MockEmptyTaskList = () => {
  return (
    <Provider store={store}>
      <EmptyTaskList />
    </Provider>
  );
};

describe("<EmptyTaskList/>", () => {
  it("renders the Empty Task list component", () => {
    render(<MockEmptyTaskList />);
    const mainDiv = screen.getByTestId("main-div");
    expect(mainDiv).toBeInTheDocument();
  });

  it("renders the Img", () => {
    render(<MockEmptyTaskList />);
    const image = screen.getByAltText("icon");
    expect(image).toBeInTheDocument();
  });

  it("renders paragraph list component", () => {
    render(<MockEmptyTaskList />);
    const paragraph = screen.getByText(
      "You didn't add any task. Please, add one."
    );
    expect(paragraph).toBeInTheDocument();
  });
});

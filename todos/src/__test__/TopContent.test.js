import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TopContent from "components/TopContent";
import store from "store";
import { Provider } from "react-redux";

describe("<TopConent/>", () => {
  const MockTodos = () => {
    return (
      <Provider store={store}>
        <TopContent />
      </Provider>
    );
  };
  it("renders the TopContent properly", () => {
    render(<MockTodos />);
    const mainDiv = screen.getByTestId("top-content");
    expect(mainDiv).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import store from "store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import Todos from "components/Todos";

describe("<IncompletTask/>", () => {
  it("renders the Completed Task card", () => {
    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );
    const mainDiv = screen.getByTestId("todos");
    expect(mainDiv).toBeInTheDocument();
  });
  
});

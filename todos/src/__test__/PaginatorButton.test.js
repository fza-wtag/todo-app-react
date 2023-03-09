import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import PaginatorButton from "components/PaginatorButton";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { updateCurrentPage } from "actions";
import { LOAD_MORE, SHOW_LESS } from "constants";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("PaginatorButton", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      currentPageReducer: {
        currentPage: 1,
      },
    });
  });

  it("Renders the Load More button", () => {
    render(
      <Provider store={store}>
        <PaginatorButton type={LOAD_MORE} />
      </Provider>
    );
    const button = screen.getByTestId("load-more-button");
    expect(button).toBeInTheDocument();
  });

  it("Renders the Show Less button", () => {
    render(
      <Provider store={store}>
        <PaginatorButton type={SHOW_LESS} />
      </Provider>
    );
    const button = screen.getByTestId("show-less-button");
    expect(button).toBeInTheDocument();
  });

  it("Dispatches the correct action when Load More button is clicked", () => {
    render(
      <Provider store={store}>
        <PaginatorButton type={LOAD_MORE} />
      </Provider>
    );
    const button = screen.getByTestId("load-more-button");
    fireEvent.click(button);
    const actions = store.getActions();
    expect(actions).toEqual([updateCurrentPage(2)]);
  });

  it("Dispatches the correct action when Show Less button is clicked", () => {
    render(
      <Provider store={store}>
        <PaginatorButton type={SHOW_LESS} />
      </Provider>
    );
    const button = screen.getByTestId("show-less-button");
    fireEvent.click(button);
    const actions = store.getActions();
    expect(actions).toEqual([updateCurrentPage(1)]);
  });
});

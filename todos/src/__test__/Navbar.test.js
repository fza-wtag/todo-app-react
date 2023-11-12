import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setIconVisibility, setSearchValue, setLoadingState } from "actions";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("<Navbar/>", () => {
  it("renders the Navbar", () => {
    render(<Navbar />);
    const mainDiv = screen.getByTestId("main-div");
    expect(mainDiv).toBeInTheDocument();
  });

  it("handleSearchIconClick dispatches the correct actions (true to false)", () => {
    const dispatch = jest.fn();
    const searchIconState = true;
    useSelector.mockReturnValue(searchIconState);
    useDispatch.mockReturnValue(dispatch);
    render(<Navbar />);
    const SearchButtonElement = screen.getByTestId("search-button");
    fireEvent.click(SearchButtonElement);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith(setIconVisibility(false));
    expect(dispatch).toHaveBeenCalledWith(setSearchValue(""));
  });

  it("handleSearchIconClick dispatches the correct actions (false to true)", () => {
    const dispatch = jest.fn();
    const searchIconState = false;
    useSelector.mockReturnValue(searchIconState);
    useDispatch.mockReturnValue(dispatch);
    render(<Navbar />);
    const SearchButtonElement = screen.getByTestId("search-button");
    fireEvent.click(SearchButtonElement);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith(setIconVisibility(true));
    expect(dispatch).toHaveBeenCalledWith(setSearchValue(""));
  });

  it("handleInputChange dispatches the correct action", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue(true);
    render(<Navbar />);
    const SearchButtonElement = screen.getByTestId("search-button");
    fireEvent.click(SearchButtonElement);
    const SearchInputElement = screen.queryByPlaceholderText("Search");
    const event = {
      target: {
        value: "test",
      },
    };
    fireEvent.change(SearchInputElement, event);
    expect(dispatch).toHaveBeenCalledWith(setLoadingState(true));
  });
});
